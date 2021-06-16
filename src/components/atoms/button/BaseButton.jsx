import Styled from "styled-components";

export const BaseButton = Styled.button`
    padding: 6px 24px;
    border: none;
    border-radius: 9999px;
    color: white;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`