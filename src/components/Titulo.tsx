import React, { ReactNode } from 'react'
import { ITextProps, Text } from 'native-base'

import { RFValue } from "../utils/RFValue";

interface Props extends ITextProps {
    children: ReactNode
}

export const Titulo = ({children, ...rest}: Props) => {
    return (
        <Text
            // fontSize="2xl"
            fontWeight="bold"
            color="gray.500"
            textAlign="center"
            mt={RFValue(5)}
            {...rest}
        >
            {children}
        </Text>
    )
}