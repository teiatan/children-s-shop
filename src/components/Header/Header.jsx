import { HeaderTag, CoverDiv, MobileMenuButton, MobileMenuContainer } from "./Header.styled";
import { PageContainer } from "components/pageContainer/pageContainer";
import { Logo } from "./Logo/Logo";
import { SearchForm } from "./SearchForm/SearchForm";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";
import { FiMenu } from "react-icons/fi";
import { TfiFilter } from "react-icons/tfi";
import { VscSignOut, VscSignIn } from "react-icons/vsc";
import { RxPerson } from "react-icons/rx";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { Button } from "./ThemeSwitcher/ThemeSwitcher.styled";
import { useTheme } from "@emotion/react";

export function Header() {
    const theme = useTheme();

    return (
        <HeaderTag>
            <PageContainer>
                <CoverDiv>
                    <Logo />
                    <SearchForm />
                    <MobileMenuButton>
                        <FiMenu color={theme.header.textColor} size={30}/>
                    </MobileMenuButton>
                    <MobileMenuContainer>
                        <ThemeSwitcher/>
                        <Button>
                            <TfiFilter color={theme.header.textColor} size={25}/>
                        </Button>
                        <Button>
                            <VscSignIn color={theme.header.textColor} size={30} />
                        </Button>
                        <Button>
                            <VscSignOut color={theme.header.textColor} size={30}/>
                        </Button>
                        <Link to={"/basket"}> 
                            <SlBasket color={theme.header.textColor} size={30}/>
                        </Link>
                        <Link to={"/profile"}>
                            <RxPerson color={theme.header.textColor} size={30} />
                        </Link>
                    </MobileMenuContainer>
                    
                </CoverDiv>
            </PageContainer>
        </HeaderTag>
    );
};