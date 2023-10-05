import tw from 'tailwind-styled-components'

interface ContainerProps {
    disabled: boolean
}
export const Container = tw.button<ContainerProps>`
    ${(p) => p.disabled ? "btn-disabled" :  ""}

    btn
    btn-wide
    btn-info
`