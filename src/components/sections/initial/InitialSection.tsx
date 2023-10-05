import * as S from './style'
import {HTMLAttributes} from "react";

interface InitialSectionProps extends HTMLAttributes<HTMLDivElement> {
}

export function InitialSection({id}: InitialSectionProps) {
    return (
        <S.Section id={id}>
            <S.Container>
                <div className="flex flex-col font-[Roboto] text-white pt-32">
                    <div className="flex w-[21rem] h-[9rem] bg-primary_yellow">
                        <h1 className="text-[90pt] font-bold translate-x-6">O SEU</h1>
                    </div>
                    <h2 className="text-[54pt] font-normal">Canal de <span
                        className="text-primary_blue">Denúncias</span></h2>
                    <p>
                        <span className="text-[20pt]">A sua empresa tem CIPA?</span> <br/>
                        <span className="text-[15pt]">Entre em conformidade com a Lei 14.457/22 e 14.611/23 em até 10 dias.</span>
                    </p>
                </div>
            </S.Container>
        </S.Section>
    )
}