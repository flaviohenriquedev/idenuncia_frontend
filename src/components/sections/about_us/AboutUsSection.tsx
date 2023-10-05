import * as S from './style'
import {HTMLProps} from "react";
import {FiTarget} from 'react-icons/fi'
import {TbEyeShare} from 'react-icons/tb'


interface AboutUsSectionProps extends HTMLProps<HTMLDivElement> {

}

export function AboutUsSection({id}: AboutUsSectionProps) {

    return (

        <S.Section id={id}>
            <S.Container>
                <div>
                    <h1 className="text-justify">
                        A iDenuncia é uma startup inovadora que busca revolucionar a
                        forma como denúncias são feitas e tratadas, oferecendo um canal seguro e confidencial
                        para
                        que
                        indivíduos possam relatar atividades suspeitas ou antiéticas, sem medo de retaliação.
                        Nosso
                        compromisso é com integridade, transparência e responsabilidade, visando criar um
                        ambiente
                        mais
                        seguro e justo para todos.
                    </h1>
                </div>
                <S.InfoContainer>
                    <S.Info>
                        <div
                            className="absolute -top-14 flex items-center justify-center w-28 h-28 p-2 rounded-full bg-primary">
                            <h1 className="font-bold text-[15pt] text-base-100">
                                <FiTarget size={60} color="secondary"/>
                            </h1>
                        </div>
                        <div className="flex flex-col items-center mt-14">
                            <h1 className="text-[50pt] font-[Roboto] font-bold">MISSÃO</h1>
                            <p>
                                Nossa missão é promover a justiça e a ética proporcionando um meio seguro e
                                confidencial
                                para que denúncias de comportamento inadequado, fraude, assédio ou qualquer
                                outra
                                atividade
                                ilícita possam ser reportadas. Através da tecnologia e da colaboração, almejamos
                                criar
                                um
                                impacto positivo na sociedade e nas organizações, construindo um mundo onde a
                                coragem de
                                falar a verdade é valorizada e protegida.
                            </p>
                        </div>
                    </S.Info>
                    <S.Info bordercolor="border-secondary">

                        <div
                            className="absolute -top-14 flex items-center justify-center w-28 h-28 p-2 rounded-full bg-secondary">
                            <h1 className="font-bold text-[15pt] text-base-100">
                                <TbEyeShare size={60}/>
                            </h1>
                        </div>

                        <div className="flex flex-col items-center mt-14">
                            <h1 className="text-[50pt] font-[Roboto] font-bold">VISÃO</h1>
                            <p>
                                Nossa visão é ser a plataforma líder nacional em canais de denúncia seguros
                                reconhecida
                                pela
                                excelência em proteção ao denunciante, pela eficácia na resolução de problemas e
                                pela
                                promoção da integridade em todos os níveis da sociedade e das empresas.
                            </p>
                        </div>
                    </S.Info>
                </S.InfoContainer>
            </S.Container>
        </S.Section>
    )
}