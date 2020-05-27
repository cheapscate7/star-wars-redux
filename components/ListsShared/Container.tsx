import styled from 'styled-components';

/**
 * a generic container for putting things in a column
 * used for putting lists containers in a column with other elements eg a breadcrumb
 */
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2em auto;
`;

export default Container;
