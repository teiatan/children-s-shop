import { Button } from "./ThemeSwitcher/ThemeSwitcher.styled"
import { useTheme } from "@emotion/react";
import { useIsLoggedIn } from "context/contectxtHooks";
import { VscSignOut, VscSignIn } from "react-icons/vsc";

export function AuthButtons() {

    const theme = useTheme();
    const isLoggedIn = useIsLoggedIn();

    const signIn = () => {
        isLoggedIn.setIsLoggedIn(true);
    };

    const signOut = () => {
        isLoggedIn.setIsLoggedIn(false);
    };

    return(
        <>  
            {isLoggedIn.isLoggedIn ? 
            <Button onClick={signOut}>
                <VscSignOut color={theme.header.textColor} size={30}/>
            </Button>
            :
            <Button onClick={signIn}>
                <VscSignIn color={theme.header.textColor} size={30} />
            </Button>
            }  
        </>
    )
}