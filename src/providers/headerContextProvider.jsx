const { createContext, useState, useContext } = require("react");

const HeaderContext = createContext();

export const HeaderContextProvider = ({children}) => {
    const [search, setSearch] = useState("");

    return (
        <HeaderContext.Provider value={{search, setSearch}}>
            {children}
        </HeaderContext.Provider>
    )
};

export const useSearch = () => useContext(HeaderContext).search;