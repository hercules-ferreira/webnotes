import React from "react";
import { Header } from "../../components/Header";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { HiOutlineAnnotation } from "react-icons/hi";
import { NoteItem } from "../../components/NoteItem";
import { Link } from "react-router-dom";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input
            placeholder="Adicione uma nota"
            type="text"
            icon={HiOutlineAnnotation}
          />
          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem
              isNew={false}
              value="https://www.linkedin.com/in/hercules-ferreira/"
            />
            <NoteItem value="" isNew={true} placeholder="Novo link" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem isNew={false} value="React" />
              <NoteItem value="" isNew={true} placeholder="Nova tag" />
            </div>
          </Section>

          <Button title="Salvar"></Button>
        </Form>
      </main>
    </Container>
  );
}
