import React from "react";
import { Container } from "./styles";
import { IconType as ReactIconType } from "react-icons";

export interface InputProps {
  placeholder: string;
  icon?: ReactIconType;
  type: string;
}

export function Input({ placeholder, type, icon: Icon }: InputProps) {
  return (
    <Container>
      {Icon && <Icon size={20} />}

      <input placeholder={placeholder} type={type} />
    </Container>
  );
}
