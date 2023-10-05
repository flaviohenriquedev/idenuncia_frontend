'use client'

import * as S from './style'
import {PageContent} from '@/components/layout/root/content';
import {FormEvent, useDebugValue, useState} from "react";
import {Button} from "@/components/actions/button";
import {Alert} from "@/components/data_display/alert";

type EmailContact = {
    name: string
    phone: string
    email: string
    companyName: string
    position: string
    message: string
}

export default function PageContact() {

    const [emailContactDTO, setEmailContactDTO] = useState<EmailContact>({
        name: '',
        phone: '',
        email: '',
        companyName: '',
        position: '',
        message: ''
    })
    const [terms, setTerms] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState<string>("")
    const [typeAlert, setTypeAlert] = useState<'success' | 'warning' | 'error'>()

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        sendEmail();
    }

    async function sendEmail() {
        await fetch("http://localhost:9090/send_email/contact", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailContactDTO),
        })
            .then(response => {
                if (response.status === 200) {
                    setTypeAlert('success')
                }
                return response.text();
            })
            .then(data => {
                setAlertMessage(data)
                setShowAlert(true)
            }) // Exibe a resposta no console
            .catch(error => console.error("Erro:", error));
    }

    function closeAlert() {
        setShowAlert(false)
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
                    <form onSubmit={(e) => handleSubmit(e)}
                          className="gap-5 bg-base-200 m-8 w-full h-auto px-20 py-8 rounded-lg">

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
                                    value={emailContactDTO?.name}
                                    onChange={(e) => setEmailContactDTO({...emailContactDTO, name: e.target.value})}
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
                                    value={emailContactDTO?.phone}
                                    onChange={(e) => setEmailContactDTO({...emailContactDTO, phone: e.target.value})}
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
                                    value={emailContactDTO?.email}
                                    onChange={(e) => setEmailContactDTO({...emailContactDTO, email: e.target.value})}
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
                                    value={emailContactDTO?.companyName}
                                    onChange={(e) => setEmailContactDTO({...emailContactDTO, companyName: e.target.value})}
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
                                    value={emailContactDTO?.position}
                                    onChange={(e) => setEmailContactDTO({...emailContactDTO, position: e.target.value})}
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
                                    value={emailContactDTO?.message}
                                    onChange={(e) => setEmailContactDTO({...emailContactDTO, message: e.target.value})}
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
                                    <input type="checkbox" className="checkbox"/>
                                </label>
                            </div>
                            <div>
                                <Button title="Enviar" disabled={!terms}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Alert showalert={showAlert} type="success" message={alertMessage} closealert={closeAlert}/>
        </PageContent.Root>
    );
}
