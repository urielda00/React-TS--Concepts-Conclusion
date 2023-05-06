import { useContext } from "react"
import { ThemeContex } from "./ThemeContext"



export const Box = () => {
  const theme= useContext(ThemeContex)
  return (
    <div style={{backgroundColor: theme.primary.main, color:theme.primary.text}}>
      
      Theme context
    </div>
  )
}