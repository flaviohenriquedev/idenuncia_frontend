'use client'


import * as S from './style'
import {PageContent} from '@/components/layout/root/content';
import {FormEvent, useState} from "react";
import {Button} from "@/components/actions/button";

export default function PageContact() {

    const [terms, setTerms] = useState(false)

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    return (
        <PageContent.Root>
            <div className="flex flex-col items-center w-full h-screen bg-slate-600">

                <S.Header>
                    <div className=" w-full min-w-[100%] min-h-[100%] h-auto bg-primary_blue/40"/>
                </S.Header>


                <div className="flex items-center px-10 w-full min-h-[7rem] bg-primary_yellow">
                    <h1 className="font-bold font-[Roboto] text-[40pt] text-base-100">CONTATO</h1>
                </div>

                <div className="flex flex-col justify-center items-center w-full h-full bg-base-100 px-40 py-10">
                    <form onSubmit={(e) => handleSubmit(e)} className="gap-5 bg-base-200 m-8 w-full h-auto px-20 py-8 rounded-lg">

                        <div className='flex justify-between items-center'>
                            <div className='mb-8'>
                                <h1 className='text-[15pt] font-bold text-primary_blue'>Solicite uma proposta
                                    comercial</h1>
                                <h4 className="text-primary_blue">Preencha os dados abaixo</h4>
                            </div>
                        </div>


                        <fieldset className=" flex gap-4 p-2 rounded-lg mb-5 bg-base-200">
                            <div className="flex flex-col w-full">
                                <label className="label">
                                    <span className="label-text">Nome completo</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Digite seu nome completo."
                                    className="input input-bordered input-sm w-full grow"
                                />
                            </div>

                            <div className="flex flex-col w-80">
                                <label className="label">
                                    <span className="label-text">Telefone</span>
                                </label>
                                <input
                                    type="phone"
                                    placeholder="(00) 99999-9999"
                                    className="input input-bordered input-sm w-full grow"
                                />
                            </div>

                            <div className="flex flex-col w-[35rem]">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Informe seu melhor email."
                                    className="input input-bordered input-sm w-full grow"
                                />
                            </div>
                        </fieldset>

                        <fieldset className=" flex gap-4 p-2 rounded-lg">
                            <div className="flex flex-col w-full">
                                <label className="label">
                                    <span className="label-text">Empresa</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nome da sua empresa."
                                    className="input input-bordered input-sm w-full grow"
                                />
                            </div>

                            <div className="flex flex-col w-full">
                                <label className="label">
                                    <span className="label-text">Cargo</span>
                                </label>
                                <input
                                    type="phone"
                                    placeholder="Qual seu cargo?"
                                    className="input input-bordered input-sm w-full grow"
                                />
                            </div>
                        </fieldset>
                        <fieldset className=" flex items-center gap-4 p-2 rounded-lg">
                            <div className="flex flex-col w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <textarea
                                    placeholder="Mensagem"
                                    className="textarea textarea-bordered textarea-lg grow resize-none h-60"
                                ></textarea>
                            </div>
                        </fieldset>
                        <div className="flex items-center justify-between">


                            <div className="flex gap-10 ">
                                <label className="flex items-center gap-4">
                                    <span className="label-text">Concordo com os termos</span>
                                    <input type="checkbox" className="checkbox" onChange={() => setTerms(!terms)}/>
                                </label>

                                <label className="flex items-center gap-4">
                                    <span className="label-text">Receber novidades por email</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </div>

                            <div>
                                <Button title="Enviar" disabled={!terms} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </PageContent.Root>
    );
}