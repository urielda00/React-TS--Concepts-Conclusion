import { createContext } from "react";
import { theme } from "./theme";

type ThemeContexProviderProps= {
  children: React.ReactNode
}


export const ThemeContex= createContext(theme)


export const ThemeContexProvider= ({children}: ThemeContexProviderProps)=>{
 return <ThemeContex.Provider value={theme}>{children}</ThemeContex.Provider>
}