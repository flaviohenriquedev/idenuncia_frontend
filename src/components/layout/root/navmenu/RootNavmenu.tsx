import * as S from './style'
import React from "react";

interface RootNavmenuProps {
    children: React.ReactNode
}
export function RootNavmenu({children} : RootNavmenuProps) {
    return (
        <S.Nav>
            {children}
        </S.Nav>
    )
}