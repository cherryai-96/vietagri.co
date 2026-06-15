import os

with open('src/i18n.tsx', 'r') as f:
    content = f.read()

end_content = """};

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = resources[language];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        // Fallback to English
        let fallback: any = resources['en'];
        for (const k of keys) {
          if (fallback[k] === undefined) return path;
          fallback = fallback[k];
        }
        return fallback;
      }
      current = current[key];
    }
    
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
"""

with open('src/i18n.tsx', 'a') as f:
    f.write(";\n\n")
    f.write(end_content)

print("Fixed i18n.tsx")
