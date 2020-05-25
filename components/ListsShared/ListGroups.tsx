import styled, { css } from 'styled-components';

const ListGroups = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    width: 100%;
    ${({ theme }) => css`
        border-bottom: 1px solid ${theme.colors.foreground};
    `};
`;

export default ListGroups;
