import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

export const StyledToolBar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    @media (max-width: 435px) {
        flex-direction: column;
    }
`;

export const StyledTypography = styled(Typography)`
    @media (max-width: 435px) {
        display: none;
    }
`;

export const StyledList = styled(List)`
    a {
        text-decoration: none;
        color: gray;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 435px) {
        flex-direction: column;
    }
`;
