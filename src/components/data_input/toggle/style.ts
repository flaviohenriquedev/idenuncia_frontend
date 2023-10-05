import tw from 'tailwind-styled-components'

interface ContainerProps {
    isOn: boolean
}

export const Container = tw.div`

    flex
    items-center
    w-12
    h-6
    rounded-full
    bg-primary

    hover:cursor-pointer
`

export const Circle = tw.div<ContainerProps>`

    ${(p) => p.isOn ? "translate-x-full" : ""}

    w-6
    h-6
    rounded-full
    bg-base-100
    border-2
    border-primary

    transition-all
    duration-200
`
