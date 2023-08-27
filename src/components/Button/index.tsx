import { Container } from "./styles";
import React from 'react';

interface ButtonProps {
  title: string;
  loading?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>; // Adicionando a tipagem correta
}

export function Button({ title, loading = false, onClick }: ButtonProps) {
  return (
    <Container type="button" disabled={loading} onClick={onClick}>
      {loading ? "Loading..." : title}
    </Container>
  );
}
