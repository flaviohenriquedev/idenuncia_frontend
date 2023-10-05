import tw from 'tailwind-styled-components'

interface AlertProps {
    showalert?: boolean
    type?: 'success' | 'warning' | 'error'
}

export const Container = tw.div<AlertProps>`
    ${(p) => p.showalert ? "visible" : "invisible"}

    flex
    items-start
    justify-center
    w-screen
    h-screen
    bg-transparent
    fixed
    z-10
    pt-40
    backdrop-blur-sm 
`

export const Card = tw.div<AlertProps>`
    ${(p) =>   p.type === "success" ? "alert-success" :
                                                    p.type === "error" ? "alert-error" : 
                                                    p.type === "warning" ? "alert-warning" : "alert-info"}
    
    flex
    flex-col
    items-center
    justify-center
    w-96
    h-32
    alert
    rounded-lg
    shadow-xl
`

export const Message = tw.h1`
    text-base-100
    font-bold
    text-center
`