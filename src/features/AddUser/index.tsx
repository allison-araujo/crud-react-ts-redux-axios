import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "redux-thunk/extend-redux";
import Content from "../../components/Content";
import Input from "../../components/Input/Input";
import { AppDispatch } from "../../store";
import { UserType } from "../../ts";
import { addUsersAsync } from "../UserSlice/UserSlice";
import { Button, Column, Container, Row } from "./styles";

const initialValuesUser: UserType = {
  email: "",
  username: "",
  password: "",
  id: 0,
  firstname: "",
  lastname: "",
  city: "",
  street: "",
  number: "",
  zipcode: "",
  lat: "",
  long: "",
  phone: "",
};

const AddUser = () => {
  const navigate = useNavigate();

  const typedDispatch = useDispatch<AppDispatch>();
  const [values, setValues] = useState(initialValuesUser);
  const {
    email,
    username,
    password,
    firstname,
    lastname,
    city,
    street,
    number,
    zipcode,
    lat,
    long,
    phone,
  } = values;

  const handleSubmit = () => {
    console.log("to no handle");
    typedDispatch(addUsersAsync(values));
    navigate("/list-user");
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
              onChange={e =>
                setValues({ ...values, firstname: e.target.value })
              }
            />

            <Input
              type="text"
              placeholder="Sobrenome"
              value={lastname}
              onChange={e => setValues({ ...values, lastname: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Digite seu Email"
              value={email}
              onChange={e => setValues({ ...values, email: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Nome de Usuário"
              value={username}
              onChange={e => setValues({ ...values, username: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Password"
              value={password}
              onChange={e => setValues({ ...values, password: e.target.value })}
            />

            <Input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={e => setValues({ ...values, city: e.target.value })}
            />
          </Column>
          <Column>
            <Input
              type="text"
              placeholder="Rua"
              value={street}
              onChange={e => setValues({ ...values, street: e.target.value })}
            />

            <Input
              type="text"
              placeholder="Numero"
              value={number}
              onChange={e => setValues({ ...values, number: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Telefone"
              value={phone}
              onChange={e => setValues({ ...values, phone: e.target.value })}
            />
            <Input
              type="text"
              placeholder="ZipCode"
              value={zipcode}
              onChange={e => setValues({ ...values, zipcode: e.target.value })}
            />
            <Input
              type="text"
              placeholder="latitude"
              value={lat}
              onChange={e => setValues({ ...values, lat: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Longitude"
              value={long}
              onChange={e => setValues({ ...values, long: e.target.value })}
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
