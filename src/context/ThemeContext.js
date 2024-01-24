import React, {useState} from "react";

export const ThemeContext = React.createContext(null);

export const ThemeProvider = ({children}) => {

    const [isDark, setIsDark] = useState(true);
    const toggleTheme = () => {
        setIsDark((prev) => !prev);
    }

    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

