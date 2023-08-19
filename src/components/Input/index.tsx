import React from "react";
import { Container } from "./styles";
import { IconType as ReactIconType } from "react-icons";

export interface InputProps {
  placeholder: string;
  icon?: ReactIconType;
}

export function Input({ placeholder, icon: Icon }: InputProps) {
  return (
    <Container>
      {Icon && <Icon size={20} />}

      <input placeholder={placeholder} />
    </Container>
  );
}
