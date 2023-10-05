import * as S from './style'
import {ReactNode} from "react";

export function HeaderRigthContent({children} : {children: ReactNode}) {
    return (
        <S.RightContainer>
            {children}
        </S.RightContainer>
    )
}