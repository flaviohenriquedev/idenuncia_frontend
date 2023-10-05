import tw from 'tailwind-styled-components'

type InfoProps = {
    bordercolor?: "border-primary" | "border-secondary"
}

export const Section = tw.section`
    w-full
    h-screen
    pt-28
    px-20
`

export const Container = tw.div`
    flex
    flex-col
    h-full
    justify-around
`

export const ApresentationContainer = tw.h1`
    
`

export const ApresentationText = tw.h1`
`

export const InfoContainer = tw.div`
    flex
    justify-around
    w-full
`

export const Info = tw.div<InfoProps>`

    ${(p) => p.bordercolor ? p.bordercolor : "border-primary"}
    
    relative
    flex
    flex-col
    items-center
    w-[40rem]
    h-auto
    p-5
    border-dashed
    border-2
    rounded-lg
`