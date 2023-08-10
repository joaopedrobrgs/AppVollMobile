import React from 'react'
import { FormControl, ITextProps, Input } from 'native-base'

import { RFValue } from '../utils/RFValue'

interface Props extends ITextProps {
    label?: string,
    placeholder?: string,
    type: "text" | "password"
}

export const EntradaTexto = ({label, placeholder, type, ...rest}: Props) => {
    return (
        <FormControl mt={RFValue(3)}>
            <FormControl.Label>{label}</FormControl.Label>
            <Input
                placeholder={placeholder}
                type={type} 
                size="lg"
                w="100%"
                borderRadius="lg"
                bgColor="gray.100"
                shadow={3}
                {...rest}
            />
        </FormControl>
    )
}