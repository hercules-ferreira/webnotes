import { Container, Form, Background } from "./styles";
import React from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Web Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links</p>
        <h2>Faça seu login</h2>
        <Input placeholder="Digite seu E-mail" type="text" icon={FiMail} />
        <Input placeholder="Digite sua Senha" type="password" icon={FiLock} />
        <Button title="Entrar" />

        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
