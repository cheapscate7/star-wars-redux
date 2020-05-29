import styled from 'styled-components';

const PageHeader = styled.nav`
    color: white;
    padding: 2em 1em;
    border-bottom: 1px solid #777777;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 320px) {
        flex-direction: column;
        justify-content: space-between;
        > *:first-child {
            margin-bottom: 0.5em;
        }
        > *:last-child {
            margin-top: 0.5em;
        }
    }
`;

export default PageHeader;
