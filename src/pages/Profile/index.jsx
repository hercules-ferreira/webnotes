import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";
import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPassWordNew] = useState("");

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };
    await updateProfile({ user });
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/hercules-ferreira.png" alt="avatar" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input
          onChange={(e) => setPasswordOld(e.target.value)}
          placeholder="Senha Atual"
          type="password"
          icon={FiLock}
        />
        <Input
          onChange={(e) => setPassWordNew(e.target.value)}
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
        />

        <Button onClick={handleUpdate} title="Salvar"></Button>
      </Form>
    </Container>
  );
}
