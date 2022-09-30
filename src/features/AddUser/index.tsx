import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import Input from "../../components/Input/Input";
import { createUser } from "../UserSlice/UserSlice";
import { Button, Column, Container, Row } from "./styles";

const initialValuesUser = {
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

  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValuesUser);

  const handleSubmit = () => {
    dispatch(createUser(values));
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
              value={values.firstname}
              onChange={e =>
                setValues({ ...values, firstname: e.target.value })
              }
            />

            <Input
              type="text"
              placeholder="Sobrenome"
              value={values.lastname}
              onChange={e => setValues({ ...values, lastname: e.target.value })}
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
              value={values.username}
              onChange={e => setValues({ ...values, username: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Password"
              value={values.password}
              onChange={e => setValues({ ...values, password: e.target.value })}
            />

            <Input
              type="text"
              placeholder="Cidade"
              value={values.city}
              onChange={e => setValues({ ...values, city: e.target.value })}
            />
          </Column>
          <Column>
            <Input
              type="text"
              placeholder="Rua"
              value={values.street}
              onChange={e => setValues({ ...values, street: e.target.value })}
            />

            <Input
              type="text"
              placeholder="Numero"
              value={values.number}
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
              value={values.zipcode}
              onChange={e => setValues({ ...values, zipcode: e.target.value })}
            />
            <Input
              type="text"
              placeholder="latitude"
              value={values.lat}
              onChange={e => setValues({ ...values, lat: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Longitude"
              value={values.long}
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
