import {ReactNode} from "react";
import * as S from './style'

export function Container({children}: { children: ReactNode }) {
    return (
        <S.Container>
            {children}
        </S.Container>
    )
}