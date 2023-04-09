import { useContext } from "react";
import { ThemeContext } from "./theme";
import { SearchContext } from "./search";

export const useThemeColors = () => useContext(ThemeContext);

export const useSearch = () => useContext(SearchContext);