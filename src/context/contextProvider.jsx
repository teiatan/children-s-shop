import { IsLoggedInContextProvider } from "./isLoggedIn";

import { SearchContextProvider } from "./search";
import { ThemeContextProvider } from "./theme";

export function ContextProvider({children}) {
    return(
        <ThemeContextProvider>
            <SearchContextProvider>
                <IsLoggedInContextProvider>
                    
                        {children} 
                    
                </IsLoggedInContextProvider>
            </SearchContextProvider>
        </ThemeContextProvider>
    )
}