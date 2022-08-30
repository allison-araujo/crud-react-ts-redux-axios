import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "../../components/Content";
import { RootState } from "../../store";
import { UserType } from "../../ts";
import { addUser } from "../UserSlice/UserSlice";
import { Button, Column, Container, Input, Row } from "./styles";

const initialStateUser: UserType = {
  email: "",
  userName: "",
  password: "",
  id: 0,
  name: {
    firstname: "",
    lastname: "",
  },
  address: {
    city: "",
    street: "",
    number: 0,
    zipcode: "",
    geolocation: {
      lat: "",
      long: "",
    },
  },
  phone: "",
};

const AddUser = () => {
  const user = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialStateUser);

  const handleSubmit = () => {
    dispatch(addUser(values));
  };

  return (
    <Content>
      <Container>
        <Row>
          <Column>
            <Input
              type="text"
              placeholder="Digite o nome.."
              value={values.name.firstname}
              onChange={e =>
                setValues({ ...values, firstname: e.target.value })
              }
            />

            <Input
              type="text"
              placeholder="Sobrenome"
              value={values.name.lastname}
              onChange={e => setValues({ ...values, name: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Digite seu Email"
              value={values.email}
              onChange={e => setValues({ ...values, email: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Nome de Usuário"
              value={values.userName}
              onChange={e => setValues({ ...values, username: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Password"
              value={values.password}
              onChange={e => setValues({ ...values, password: e.target.value })}
            />
          </Column>
          <Column>
            <Input
              type="text"
              placeholder="Cidade"
              value={values.address.city}
              onChange={e => setValues({ ...values, city: e.target.value })}
            />

            <Input
              type="text"
              placeholder="Rua"
              value={values.address.street}
              onChange={e => setValues({ ...values, street: e.target.value })}
            />

            <Input
              type="text"
              placeholder="Numero"
              value={values.address.number}
              onChange={e => setValues({ ...values, number: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Telefone"
              value={values.phone}
              onChange={e => setValues({ ...values, phone: e.target.value })}
            />
            <Input
              type="text"
              placeholder="ZipCode"
              value={values.address.zipcode}
              onChange={e => setValues({ ...values, zipcode: e.target.value })}
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
