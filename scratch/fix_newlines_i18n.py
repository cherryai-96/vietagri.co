file_path = "/Users/tt/Desktop/Vietagri/Website/Vietagri.co/src/i18n.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("connecting: '베트남의 농업 잠재력과\n세계적인 수요를 연결합니다.'", "connecting: '베트남의 농업 잠재력과\\n세계적인 수요를 연결합니다.'")
content = content.replace("connecting: 'ベトナムの農業ポテンシャルと\n世界をつなぐパートナー。'", "connecting: 'ベトナムの農業ポテンシャルと\\n世界をつなぐパートナー。'")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Fixed connecting newlines in src/i18n.tsx")
