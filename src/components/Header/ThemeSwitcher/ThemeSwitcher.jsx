import PropTypes from 'prop-types';
import { Button } from "./ThemeSwitcher.styled";
import { BsSunFill } from 'react-icons/bs';
import { ChangeTheme } from 'providers/themeContextProvider';
import { useTheme } from '@emotion/react';

export function ThemeSwitcher(props) {

    const onClick = ChangeTheme();
    const theme = useTheme();

    return (
        <Button onClick={onClick}><BsSunFill color={theme.header.textColor} size={30}/></Button>
    );
};

ThemeSwitcher.propTypes = {
    themeSwitcher: PropTypes.func,
};