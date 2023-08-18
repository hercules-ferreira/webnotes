import { Container } from "./styles";
import React from 'react';

export interface TagProps {
    title: string
}

export function Tag({ title }: TagProps) {
    return (
        <Container>
            {title}
        </Container>
    )
}