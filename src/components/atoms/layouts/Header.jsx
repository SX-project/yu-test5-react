import { Link } from "react-router-dom";
import Styled from "styled-components";

export const Header = () => {
    return(
        <SHeader>
            <SLink to="/">HOME</SLink>
            <SLink to="/users">USERS</SLink>
        </SHeader>
    );
};

const SHeader = Styled.header`
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding: 8px;
`

const SLink = Styled(Link)`
    margin: 0 8px;
`
