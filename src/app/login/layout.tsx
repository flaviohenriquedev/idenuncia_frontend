import {ReactNode} from "react";

export default function LoginLayout({children}: { children: ReactNode }) {
    return (
        <div>
            <h1>Login Layout</h1>
            {children}
        </div>
    )
}