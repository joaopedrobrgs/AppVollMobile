import React from 'react'
import { FormControl, Input } from 'native-base'

interface Props {
    label: string,
    placeholder: string
}

export const EntradaTexto = ({label, placeholder, ...rest}: Props) => {
    return (
        <FormControl mt={3}>
            <FormControl.Label>{label}</FormControl.Label>
            <Input
                placeholder={placeholder}
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