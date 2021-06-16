import Styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
    const { children } = props;
    return(
        <div>
            <SButton>{children}</SButton>
        </div>
    );
};

const SButton = Styled(BaseButton)`
    background-color: #40514e;
`
