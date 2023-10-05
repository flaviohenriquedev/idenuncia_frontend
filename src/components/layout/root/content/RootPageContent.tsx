import React from "react";
import * as S from './style'

interface RootPageContentProps {
    children: React.ReactNode
}

export function RootPageContent({children} : RootPageContentProps) {
    return (
        <S.Main>
            {children}
        </S.Main>
    )
}