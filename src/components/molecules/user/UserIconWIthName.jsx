import Styled from "styled-components";

export const UserIconWithName = (props) => {

    const { image, name } = props;

    return(
        <SContainer>
          <SImage height={160} width={160} src={image} alt={name} />
            <SName>{name}</SName>
        </SContainer>
    )
}

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