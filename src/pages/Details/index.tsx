import { Container, Links, Div, Content } from "./styles";
import { Button } from "../../components/Button";
import React from "react";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tags";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <>
      <Container>
        <Header />

        <main>
          <Content>
            <ButtonText disable={false} title="Excluir nota" />

            <h1>Introdução ao React</h1>

            <p>
              React, or ReactJS is a popular open-source JavaScript library for
              building interactive user interfaces. It was developed and
              released by Facebook in 2013 and is now used by many developers
              worldwide. This tutorial will provide a comprehensive overview of
              React and explain why it is an excellent choice for building
              dynamic and engaging web applications. React is a powerful
              JavaScript library with many advantages for building highly
              performant web applications. Its unique approach to building UI
              components and using a virtual DOM makes it popular among
              developers. With its large community and numerous benefits, React
              has become one of the most popular libraries for building web
              applications.
            </p>
            <Section title="Links Úteis">
              <Links>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/hercules-ferreira/"
                  >
                    https://www.linkedin.com/in/hercules-ferreira/
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/hercules-ferreira/"
                  >
                    https://github.com/hercules-ferreira/
                  </a>
                </li>
              </Links>
            </Section>

            <Section title="Marcadores">
              <Div>
                <Tag title="express" />
                <Tag title="node" />
              </Div>
            </Section>
            <Button title="Voltar" />
          </Content>
        </main>
      </Container>
    </>
  );
}
