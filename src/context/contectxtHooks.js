import { useContext } from "react";
import { ThemeContext } from "./theme";
import { SearchContext } from "./search";
import { IsLoggedInContext } from "./isLoggedIn";


export const useThemeColors = () => useContext(ThemeContext);

export const useSearch = () => useContext(SearchContext);

export const useIsLoggedIn = () => useContext(IsLoggedInContext);

