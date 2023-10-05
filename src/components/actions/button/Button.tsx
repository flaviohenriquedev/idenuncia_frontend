import * as S from './style'
import {HTMLAttributes} from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
    title: string
    disabled: boolean
}

export function Button({title, onClick, disabled} : ButtonProps) {
    return (
        <S.Container disabled={disabled} onClick={onClick}>
            {title}
        </S.Container>
    )
}