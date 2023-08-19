import { Container, Profile, Logout } from "./styles";
import { MdOutlineLogout } from "react-icons/md";
import React from "react";

export function Header() {
  return (
    <>
      <Container>
        <Profile>
          <img src="https://github.com/hercules-ferreira.png" alt="avatar" />
          <div>
            <span>Bem Vindo,</span>
            <strong>Hercules Ferreira</strong>
          </div>
        </Profile>

        <Logout>
          <MdOutlineLogout />
        </Logout>
      </Container>
    </>
  );
}
