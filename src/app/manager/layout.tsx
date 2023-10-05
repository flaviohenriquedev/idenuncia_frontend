import {ReactNode} from "react";

export default function ManagerLayout({children} : {children: ReactNode}) {
    return (
        <div>
            <h1>Manager Layout</h1>
            {children}
        </div>
    )
}