import React, { ReactNode } from 'react'
import { Button, ITextProps } from 'native-base'

import { RFValue } from '../utils/RFValue'

interface Props extends ITextProps {
    children: ReactNode
}

export const Botao = ({children, ...rest}: Props) => {
    return (
        <Button
            w="100%"
            // mt={RFValue(10)}
            borderRadius="lg"
            {...rest}
        >
            {children}
        </Button>
    )
}