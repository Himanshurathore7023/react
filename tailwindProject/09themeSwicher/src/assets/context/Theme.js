import { createContext,useContext } from "react";

export  const ThemeContex=createContext({
       themeMode : 'light',
       darkTheme: ()=>{},
       lightTheme : ()=>{},
})


export const ThemeProvider=ThemeContex.Provider

export default function useTheme(){      //coustom hook
       return useContext(ThemeContex)
}

// useContext:-
// the context itself does not hold the information it only represent the kind of information you can provide or read from components