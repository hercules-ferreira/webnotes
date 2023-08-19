import React, { ReactNode } from "react";
import { Container } from "./styles";

export interface InputProps {
  placeholder: string;
  icon?: any;
}

export function Input({ placeholder, icon: Icon }: InputProps) {
  return (
    <Container>
      {Icon && <Icon size={20} />}

      <input placeholder={placeholder} />
    </Container>
  );
}
