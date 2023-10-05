import './globals.css'
import type {Metadata} from 'next'
import {Poppins} from 'next/font/google'
import {Provider} from "@/provider/Provider";
import {Header} from "@/components/layout/root/header";
import {Navmenu} from "@/components/layout/root/navmenu";
import Link from "next/link";
import React, {ReactNode} from "react";
import {Logo} from "@/components/logo/Logo";

const poppins = Poppins({subsets: ['latin'], weight: ['200', '300', '400']})

export const metadata: Metadata = {
    title: 'iDenuncia',
    description: 'Toda voz é importante',
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="pt-br">
        <body className={poppins.className}>
        <Provider>
            <Header.Root>
                <Header.Left>
                    <Logo size="60pt"/>
                </Header.Left>
                <Header.Right>
                    <Navmenu.Root>
                        <Link href="/contact">Contato</Link>
                        <Link href="/login">Login</Link>
                    </Navmenu.Root>
                </Header.Right>
            </Header.Root>
            {children}
        </Provider>
        </body>
        </html>
    )
}
