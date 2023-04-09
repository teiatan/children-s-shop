import { HeaderTag, CoverDiv, MobileMenuButton, MobileMenuContainer } from "./Header.styled";
import { PageContainer } from "components/pageContainer/pageContainer";
import { Logo } from "./Logo/Logo";
import { SearchForm } from "./SearchForm/SearchForm";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";
import { FiMenu } from "react-icons/fi";
import { TfiFilter, TfiClose } from "react-icons/tfi";
import { RxPerson } from "react-icons/rx";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { Button } from "./ThemeSwitcher/ThemeSwitcher.styled";
import { useTheme } from "@emotion/react";
import { AuthButtons } from "./authButtons";
import { useIsLoggedIn } from "context/contectxtHooks";
import { useState } from "react";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const theme = useTheme();
    const isLoggedIn = useIsLoggedIn().isLoggedIn;

    const onClickMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <HeaderTag>
            <PageContainer>
                <CoverDiv>
                    <Logo />
                    <SearchForm />
                    <MobileMenuButton onClick={onClickMobileMenu}>
                        <FiMenu 
                            className={(isMobileMenuOpen ? 'isVisible' : 'isHidden')}
                            color={theme.header.textColor} size={30}
                        />
                        <TfiClose 
                            className={(isMobileMenuOpen ? 'isHidden' : 'isVisible')}
                            color={theme.header.textColor} size={30}
                        />
                    </MobileMenuButton>
                    <MobileMenuContainer>
                        {isLoggedIn &&
                            <>
                                <Link to={"/basket"}> 
                                    <SlBasket color={theme.header.textColor} size={30}/>
                                </Link>
                                <Link to={"/profile"}>
                                    <RxPerson color={theme.header.textColor} size={30} />
                                </Link>
                            </>
                        }
                        <ThemeSwitcher/>
                        <Button>
                            <TfiFilter color={theme.header.textColor} size={25}/>
                        </Button>
                        <AuthButtons />                        
                    </MobileMenuContainer>
                    
                </CoverDiv>
            </PageContainer>
        </HeaderTag>
    );
};