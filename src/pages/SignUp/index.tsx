import { Container, Form, Background } from "./styles";
import React from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Web Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links</p>
        <h2>Faça seu Cadastro</h2>
        <Input placeholder="Digit seu Nome" type="text" icon={FiUser} />
        <Input placeholder="Digite seu E-mail" type="text" icon={FiMail} />
        <Input placeholder="Digite sua Senha" type="password" icon={FiLock} />

        <Button title="Cadastrar" />

        <Link to="/">Já possui conta, faça o Login!</Link>
      </Form>
    </Container>
  );
}
