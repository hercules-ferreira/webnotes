import React from "react";
import { Container } from "./styles";
import { IconType as ReactIconType } from "react-icons";

export interface TextareaProps {
  placeholder: string;
  icon?: ReactIconType;
}

export function Textarea({ placeholder, icon: Icon }: TextareaProps) {
  return (
    <Container>
      {Icon && <Icon size={20} />}

      <textarea placeholder={placeholder} />
    </Container>
  );
}
