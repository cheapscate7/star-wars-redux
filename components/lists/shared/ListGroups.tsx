import styled, { css } from 'styled-components';

/**
 * a grid for putting multiple lists in a row
 */
const ListGroups = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    width: 100%;
    ${({ theme }) => css`
        border-bottom: 1px solid ${theme.colors.foreground};
    `};

    @media (max-width: 425px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
`;

export default ListGroups;
