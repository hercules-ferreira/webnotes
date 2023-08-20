import { Container } from "./styles";
import React from 'react';

export interface ButtonProps{
    title: string
    loading?: boolean

}
export function Button({title, loading}:ButtonProps){
  return (
    <Container type="button" disabled={loading}>
      {loading ? "Loading..." : title}
    </Container>
  );
} 