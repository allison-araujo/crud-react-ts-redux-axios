import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import Input from "../../components/Input/Input";
import { UserType } from "../../ts";
import { createUser } from "../UserSlice/UserSlice";
import { Button, Column, Container, Row } from "./styles";

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
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValuesUser);

  const handleSubmit = () => {
    dispatch(createUser(values));
    console.log("valors handle", values);
    navigate("/list-user");
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
              value={values.name.firstname}
              onChange={handleInputChange}
            />

            <Input
              type="text"
              placeholder="Sobrenome"
              value={values.name.lastname}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              placeholder="Digite seu Email"
              value={values.email}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              placeholder="Nome de Usuário"
              value={values.username}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              placeholder="Password"
              value={values.password}
              onChange={handleInputChange}
            />
          </Column>
          <Column>
            <Input
              type="text"
              placeholder="Cidade"
              value={values.address.city}
              onChange={handleInputChange}
            />

            <Input
              type="text"
              placeholder="Rua"
              value={values.address.street}
              onChange={handleInputChange}
            />

            <Input
              type="text"
              placeholder="Numero"
              value={values.address.number}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              placeholder="Telefone"
              value={values.phone}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              placeholder="ZipCode"
              value={values.address.zipcode}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              placeholder="latitude"
              value={values.address.geolocation.lat}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              placeholder="Longitude"
              value={values.address.geolocation.long}
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
