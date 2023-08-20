import { Container } from './styles'
import React from 'react'

export interface SectionProps {
  title: string;
  children?: React.ReactNode;
}
export function Section({ title, children }: SectionProps) {
    return (
      <Container>
        <h2>
          {title}
          {children}
        </h2>
      </Container>
    );
}



