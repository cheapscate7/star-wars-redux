import styled from 'styled-components';

const TransparentButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2em;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    outline: none;
    img,
    object {
        width: 16px;
        height: 16px;
    }
`;

export default TransparentButton;
