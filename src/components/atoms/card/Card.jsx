import Styled from "styled-components";

export const Card = (props) => {
    const { children } = props;
    return(
        <SCard>{children}</SCard>
    );
};

const SCard = Styled.div`
    background-color: white;
    box-shadow: #ddd 0px 0px 4px 2px;
    padding: 16px;
    border-radius: 20px;
`