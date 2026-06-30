import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Supabase credentials
const SUPABASE_URL = 'https://fuwmmirayevcwqmctdwy.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function updateSupabase() {
  console.log('Fetching site_resources from Supabase...');
  
  const { data, error } = await supabase.from('site_resources').select('*');
  
  if (error) {
    console.error('Error fetching data:', error);
    return;
  }
  
  if (!data || data.length === 0) {
    console.log('No data found in site_resources');
    return;
  }

  console.log(`Found ${data.length} records. Processing updates...`);
  
  for (const record of data) {
    if (!record.content) continue;
    
    // Deep clone the content
    let contentStr = JSON.stringify(record.content);
    let originalStr = contentStr;
    
    if (record.language === 'en') {
      contentStr = contentStr.replace(/simple netting structures/g, 'greenhouse structures');
      contentStr = contentStr.replace(/simple net structures/g, 'greenhouse structures');
      contentStr = contentStr.replace(/specialized netting structures/g, 'specialized greenhouse structures');
    } else if (record.language === 'vi') {
      contentStr = contentStr.replace(/cấu trúc lưới đơn giản/g, 'cấu trúc nhà kính');
      contentStr = contentStr.replace(/cấu trúc lưới che chuyên dụng/g, 'cấu trúc nhà kính chuyên dụng');
    }
    
    if (contentStr !== originalStr) {
      console.log(`Updating record ID: ${record.id} (Language: ${record.language})`);
      const { error: updateError } = await supabase
        .from('site_resources')
        .update({ content: JSON.parse(contentStr) })
        .eq('id', record.id);
        
      if (updateError) {
        console.error(`Failed to update record ${record.id}:`, updateError);
      } else {
        console.log(`Successfully updated record ${record.id}`);
      }
    }
  }
  
  console.log('Update process completed.');
}

updateSupabase();
