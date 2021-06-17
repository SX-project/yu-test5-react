import { Link } from "react-router-dom";
import Styled from "styled-components";

export const Footer = () => {
    return(
        <SFooter>
            &copy; 2021 Y Inc.
        </SFooter>
    );
};

const SFooter = Styled.footer`
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding: 8px;
    position: fixed;
    bottom:0;
    width:100%;
`