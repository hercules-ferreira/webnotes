import { Container } from "./styles";
import { Tag } from "../Tags";

import React, { ReactNode } from "react";

export interface NoteData {
  title: string;
  tags: Array<{ id: number; name: string }>;
}

export interface NoteProps {
  data: NoteData;
}

export function Note({ data }: NoteProps) {
  if (!data) {
    return <p>Não há notas no momento</p>;
  }

  return (
    <Container>
      <h1>{data.title}</h1>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
