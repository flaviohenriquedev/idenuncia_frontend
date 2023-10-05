import * as S from './style'
import {ReactNode} from "react";

export function HeaderLeftContent({children} : {children: ReactNode}) {
    return (
        <S.LeftContainer>
            {children}
        </S.LeftContainer>
    )
}