import * as S from './style'
import React from "react";

interface RootHeaderProps {
    children: React.ReactNode
}

export function RootHeader({children}: RootHeaderProps) {
    return (
        <S.Header>
            {children}
        </S.Header>
    )
}