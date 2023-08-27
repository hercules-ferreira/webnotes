import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import React, { useState } from "react";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      alert("campos vazios");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("cadastro, ok");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("cadastro sem sucesso");
        }
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Web Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links</p>
        <h2>Faça seu Cadastro</h2>
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Digit seu Nome"
          type="text"
          icon={FiUser}
        />
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

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">Já possui conta, faça o Login!</Link>
      </Form>
    </Container>
  );
}
