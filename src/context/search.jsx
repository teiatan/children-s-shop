const { createContext, useState } = require("react");

export const SearchContext = createContext();

export const HeaderContextProvider = ({children}) => {
    const [search, setSearch] = useState("");

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
    )
};