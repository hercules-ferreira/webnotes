import { Container } from './styles'
import React from 'react'


interface ButtonTextProps {
  title: string;
  disable: boolean;
}

export function ButtonText({ title, disable }: ButtonTextProps) {
  return (
    <Container disabled={disable}>
      <h4>{title}</h4>
    </Container>
  );
}


