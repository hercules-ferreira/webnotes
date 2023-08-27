import React from "react";
import { Container } from "./styles";
import { IconType as ReactIconType } from "react-icons";

export interface InputProps {
  placeholder: string;
  icon?: ReactIconType;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

export function Input({
  onChange,
  value,
  placeholder,
  type,
  icon: Icon,
}: InputProps) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />{" "}
    </Container>
  );
}
