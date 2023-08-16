import React from "react";
import { FormControl, ITextProps, Input } from "native-base";

import { RFValue } from "../utils/RFValue";

//Propriedades que iremos definir no componente filho (que vai utilizar esse componente):
interface Props extends ITextProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "password";
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
}

export const EntradaTexto = ({
  label,
  placeholder,
  type,
  secureTextEntry,
  value,
  onChangeText,
  ...rest
}: Props) => {
  return (
    <>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <Input
        placeholder={placeholder}
        type={type}
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="gray.100"
        shadow="3"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </>
  );
};
