import React, { memo, useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";
import Styled from "styled-components";

export const UserIconWithName = memo((props) => {

    const { image, name } = props;
    const { userInfo } = useContext(UserContext);
    const isAdmin = userInfo ? userInfo.isAdmin : false ;

    return(
        <SContainer>
          <SImage height={160} width={160} src={image} alt={name} />
            <SName>{name}</SName>
            {isAdmin && <SEdit>編集</SEdit>}
        </SContainer>
    );
 });

const SContainer = Styled.div`
    text-align: center;
`

const SImage = Styled.img`
    border-radius: 50%;
`

const SName = Styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`

const SEdit = Styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`