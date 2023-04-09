import PropTypes from 'prop-types';
import { Button } from "./ThemeSwitcher.styled";
import { BsSun } from 'react-icons/bs';
import { useTheme } from '@emotion/react';
import { useThemeColors } from 'context/contectxtHooks';

export function ThemeSwitcher() {

    const onClick = useThemeColors().changeTheme;
    const theme = useTheme();

    return (
        <Button onClick={onClick}><BsSun color={theme.header.textColor} size={30}/></Button>
    );
};

ThemeSwitcher.propTypes = {
    themeSwitcher: PropTypes.func,
};