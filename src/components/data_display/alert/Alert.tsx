import * as S from './style'

interface AlertProps {
    showalert: boolean
    type: 'success' | 'warning' | 'error'
    message: string
    closealert: () => void
}

export function Alert({showalert = false, type, message, closealert}: AlertProps) {
    return (
        <S.Container showalert={showalert}>
            <S.Card type={type}>
                <div className="flex items-center justify-end w-full h-auto">
                    <div onClick={closealert} className="hover:cursor-pointer">
                        <div className="flex items-center justify-center w-5 h-5 bg-base-100 text-primary rounded-full">
                            x
                        </div>
                    </div>
                </div>
                <S.Message>
                    {message}
                </S.Message>
            </S.Card>
        </S.Container>
    )
}