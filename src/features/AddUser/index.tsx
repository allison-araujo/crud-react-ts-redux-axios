import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "../../components/Content";
import { RootState } from "../../store";
import { UserNameType, UserType } from "../../ts";
import { addUsersAsync } from "../UserSlice/UserSlice";
import { Button, Column, Container, Input, Row } from "./styles";

const AddUser = () => {
  const user = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState<UserType>();
  const [name, setName] = useState<UserNameType>();

  const handleSubmit = () => {
    dispatch(addUsersAsync(newUser));
  };

  return (
    <Content>
      <Container>
        <Row>
          <Column>
            <Input
              type="text"
              placeholder="Digite o nome.."
              onChange={e => setName({ ...name, name: e.target.value })}
            />

            <Input
              type="text"
              placeholder="Sobrenome"
              onChange={e => setNewUser({ ...newUser, name: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Digite seu Email"
              value={""}
              onChange={e => setNewUser({ ...newUser, email: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Nome de Usuário"
              onChange={e =>
                setNewUser({ ...newUser, username: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Password"
              onChange={e =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
          </Column>
          <Column>
            <Input
              type="text"
              placeholder="Cidade"
              onChange={e => setNewUser({ ...newUser, city: e.target.value })}
            />

            <Input
              type="text"
              placeholder="Rua"
              onChange={e => setNewUser({ ...newUser, street: e.target.value })}
            />

            <Input
              type="text"
              placeholder="Numero"
              onChange={e => setNewUser({ ...newUser, number: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Telefone"
              onChange={e => setNewUser({ ...newUser, phone: e.target.value })}
            />
            <Input
              type="text"
              placeholder="ZipCode"
              onChange={e =>
                setNewUser({ ...newUser, zipcode: e.target.value })
              }
            />
          </Column>
        </Row>
        <Button onClick={handleSubmit} placeholder="Enviar">
          Enviar
        </Button>
      </Container>
    </Content>
  );
};

export default AddUser;
