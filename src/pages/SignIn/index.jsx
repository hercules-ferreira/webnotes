import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Web Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links</p>
        <h2>Faça seu login</h2>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu E-mail"
          type="text"
          icon={FiMail}
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua Senha"
          type="password"
          icon={FiLock}
        />
        <Button onClick={handleSignIn} title="Entrar" /> {/* Correção aqui */}
        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
