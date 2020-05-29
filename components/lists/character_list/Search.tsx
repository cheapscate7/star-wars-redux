import styled, { css } from 'styled-components';
/**
 * A search box for filtering Character results
 */
const Search = styled.input`
    background-color: transparent;
    padding: 0.75em 1.2em;
    outline: none;
    ${({ theme }) => css`
        border: 1px solid ${theme.colors.foreground};
        color: ${theme.colors.foreground};
        &:focus {
            border: 1px solid ${theme.colors.highlight_1};
        }
    `};
`;

export default Search;
