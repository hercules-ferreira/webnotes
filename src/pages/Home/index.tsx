import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import React from "react";

import { FiPlus, FiSearch } from "react-icons/fi";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Web Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title={"Todos"} disable={false} />
        </li>

        <li>
          <ButtonText title={"React"} disable />
        </li>

        <li>
          <ButtonText title={"Typescript"} disable />
        </li>
      </Menu>
      <Search>
        <Input placeholder="Search" icon={FiSearch} type="text" />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: 1, name: "react" },
                { id: 2, name: "typescript" },
              ],
            }}
          />
          <Note
            data={{
              title: "React",
              tags: [
                { id: 1, name: "react" },
                { id: 2, name: "typescript" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to={"/new"}>
        <FiPlus />
        criar nota
      </NewNote>
    </Container>
  );
}
