import { useState } from "react";
import Content from "../../components/Content";
import { Button, Column, Container, Input, Row } from "./styles";

const AddUser = () => {
  const [inputUser, setInputUser] = useState("");

  return (
    <Content>
      <Container>
        <Row>
          <Column>
            <Input
              type="text"
              placeholder="Digite o nome.."
              onChange={e => setInputUser(e.target.value)}
            />

            <Input
              type="text"
              placeholder="Sobrenome"
              onChange={e => setInputUser(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Digite seu Email"
              onChange={e => setInputUser(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Nome de Usuário"
              onChange={e => setInputUser(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Password"
              onChange={e => setInputUser(e.target.value)}
            />
          </Column>
          <Column>
            <Input
              type="text"
              placeholder="Cidade"
              onChange={e => setInputUser(e.target.value)}
            />

            <Input
              type="text"
              placeholder="Rua"
              onChange={e => setInputUser(e.target.value)}
            />

            <Input
              type="text"
              placeholder="Numero"
              onChange={e => setInputUser(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Telefone"
              onChange={e => setInputUser(e.target.value)}
            />
            <Input
              type="text"
              placeholder="ZipCode"
              onChange={e => setInputUser(e.target.value)}
            />
          </Column>
        </Row>
        <Button type="submit" placeholder="Enviar">
          Enviar
        </Button>
      </Container>
    </Content>
  );
};

export default AddUser;
