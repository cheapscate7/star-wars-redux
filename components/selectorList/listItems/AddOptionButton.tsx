import styled, { css } from 'styled-components';

/**
 * button for adding either master or child list elements to the search results
 */
const AddOptionButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2em;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    img,
    object {
        width: 16px;
        height: 16px;
    }
`;

export default AddOptionButton;
