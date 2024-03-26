import React, { createContext, useState, useContext, useReducer } from "react";

// Definir el tipo para el contexto del tema
interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
// Crear el contexto del tema
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const reducer = (state: any, action: any) => {};

const initialState = "false";

const init = (start: any) => {
  const a = localStorage.getItem("darkMode");
  return !a ? start : a;
};

// Crear el proveedor de contexto del tema
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state] = useReducer(reducer, initialState, init);
  console.log(state);
  
  const [darkMode, setDarkMode] = useState<boolean>(Boolean(state));

  // Función para cambiar el modo oscuro
  const toggleDarkMode = () => {
    const cambio = !darkMode;
    setDarkMode((prevMode) => cambio);
    localStorage.setItem("darkMode", JSON.stringify(cambio));
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
