import { HeaderContextProvider } from "./search";
import { ThemeContextProvider } from "./theme";

export function ContextProvider({children}) {
    return(
        <ThemeContextProvider>
            <HeaderContextProvider>
                {children}
            </HeaderContextProvider>
        </ThemeContextProvider>
    )
}