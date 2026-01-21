import React, { createContext, useState, useContext, Children} from "react"; 

const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("id");

   const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"));
   };

   return (
    <LanguageContext.Provider value ={{ language, toggleLanguage}}>
        {children}
    </LanguageContext.Provider>
   )
}
