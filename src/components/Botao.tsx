import React, { ReactNode } from 'react'
import { Button, ITextProps } from 'native-base'

interface Props extends ITextProps {
    children: ReactNode
}

export const Botao = ({children, ...rest}: Props) => {
    return (
        <Button
            w="100%"
            mt={10}
            borderRadius="lg"
            {...rest}
        >
            {children}
        </Button>
    )
}