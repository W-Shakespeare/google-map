import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        '@media (max-width: 920px)': {
            fontSize: '12px'
        }
    }
}));

export const StyledButton = styled(Button)`
    display: flex;
    justify-content: space-between;
    @media (max-width: 435px) {
        width: 80%;
    }
`;

export const Btn = ({ children, variant, color, startIcon, onClick, disabled }) => {
    const classes = useStyles();

    return (
        <StyledButton
            variant={variant}
            color={color}
            className={classes.button}
            startIcon={startIcon}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    );
};
