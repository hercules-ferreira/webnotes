import { Container, Profile, Logout } from "./styles";
import { MdOutlineLogout } from "react-icons/md";
import React from "react";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut } = useAuth();

  return (
    <>
      <Container>
        <Profile to="/profile">
          <img src="https://github.com/hercules-ferreira.png" alt="avatar" />
          <div>
            <span>Bem Vindo,</span>
            <strong>Hercules Ferreira</strong>
          </div>
        </Profile>

        <Logout onClick={signOut}>
          <MdOutlineLogout />
        </Logout>
      </Container>
    </>
  );
}
