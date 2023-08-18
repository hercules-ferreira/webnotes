import { Container } from './styles'
import React from 'react'


interface ButtonTextProps{
    title: string
}

export function ButtonText({title}:ButtonTextProps){
    return(
        <Container>
            <h4>
            {title}
            </h4>
        </Container>
    )
}



