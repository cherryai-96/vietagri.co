import re

with open('src/i18n.tsx', 'r') as f:
    content = f.read()

# Replace the specific <br> tag
new_content = content.replace('<br class="hidden md:block" />', '')

# Clean up any double spaces that might have been created
new_content = new_content.replace('  ', ' ')

with open('src/i18n.tsx', 'w') as f:
    f.write(new_content)

print("Removed all <br> tags from i18n.tsx")
