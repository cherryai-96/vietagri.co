/**
 * Utility for exporting data to Excel (.csv format with UTF-8 BOM)
 * and copying TSV data for Google Sheets.
 */

function escapeCsvValue(val: unknown): string {
  if (val === null || val === undefined) return '""';
  const str = String(val);
  if (str.includes('"') || str.includes(',') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return `"${str}"`;
}

export function downloadExcelCsv(
  filename: string,
  headers: string[],
  rows: (string | number | undefined | null)[][]
) {
  // UTF-8 BOM (\uFEFF) ensures Microsoft Excel and Google Sheets open Vietnamese characters flawlessly
  const BOM = '\uFEFF';
  const csvContent = [
    headers.map(escapeCsvValue).join(','),
    ...rows.map((row) => row.map(escapeCsvValue).join(',')),
  ].join('\r\n');

  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename.endsWith('.csv') ? filename : `${filename}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export async function copyForGoogleSheets(
  headers: string[],
  rows: (string | number | undefined | null)[][]
): Promise<boolean> {
  // TSV format allows 1-click paste (Ctrl+V / Cmd+V) directly into Google Sheets cells
  const tsvContent = [
    headers.join('\t'),
    ...rows.map((row) =>
      row
        .map((val) => {
          if (val === null || val === undefined) return '';
          return String(val).replace(/[\t\r\n]+/g, ' ');
        })
        .join('\t')
    ),
  ].join('\n');

  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(tsvContent);
      return true;
    }
    throw new Error('Clipboard API unavailable');
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = tsvContent;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    return success;
  }
}

