import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "../../components/Content";
import { RootState } from "../../store";
import { UserType } from "../../ts";
import { addUser } from "../UserSlice/UserSlice";
import { Button, Column, Container, Input, Row } from "./styles";

const initialValuesUser: UserType = {
  email: "",
  username: "",
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
  const [values, setValues] = useState(initialValuesUser);

  const {
    email,
    username,
    password,
    id,
    name: { firstname, lastname },
    address: {
      city,
      street,
      number,
      zipcode,
      geolocation: { lat, long },
    },
    phone,
  } = values;

  const handleSubmit = () => {
    dispatch(addUser(values));
  };

  const handleInputChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Content>
      <Container>
        <Row>
          <Column>
            <Input
              type="text"
              placeholder="Digite o nome.."
              value={firstname}
              onChange={handleInputChange}
            />

            <Input
              type="text"
              placeholder="Sobrenome"
              value={lastname}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              placeholder="Digite seu Email"
              value={email}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              placeholder="Nome de Usuário"
              value={username}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              placeholder="Password"
              value={password}
              onChange={handleInputChange}
            />
          </Column>
          <Column>
            <Input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={handleInputChange}
            />

            <Input
              type="text"
              placeholder="Rua"
              value={street}
              onChange={handleInputChange}
            />

            <Input
              type="text"
              placeholder="Numero"
              value={number}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              placeholder="Telefone"
              value={phone}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              placeholder="ZipCode"
              value={zipcode}
              onChange={handleInputChange}
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
