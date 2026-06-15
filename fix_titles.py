import os
import re

directory = 'src/pages'
for filename in os.listdir(directory):
    if not filename.endswith('.tsx'):
        continue
    filepath = os.path.join(directory, filename)
    with open(filepath, 'r') as f:
        content = f.read()

    # We want to replace {t('xxx.yyyTitle')} and {t('xxx.yyySub')} 
    # with <span dangerouslySetInnerHTML={{ __html: t('xxx.yyyTitle') }} />
    # But ONLY if they are not already inside an attribute like title={t(...)}
    
    # We can do this with a regex that looks for >\s*{t('([^']+Title|[^']+Sub)')}\s*<
    # Actually, it's often inside a tag: <h2>{t('xxx')}</h2>
    
    new_content = re.sub(
        r'>\s*\{t\(([\'"][^\'"]+(Title|Sub)[\'"])\)\}\s*<',
        r'><span dangerouslySetInnerHTML={{ __html: t(\1) }} /><',
        content
    )

    with open(filepath, 'w') as f:
        f.write(new_content)

print("Done")
