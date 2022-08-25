import { Container, Table, Tbody, Td, Th, Thead, Tr } from "./styles";

type User = {
  user: [];
};

interface IUserProps {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  street: string;
  number: number;
  zipcode: string;
  lat: string;
  long: string;
  id: number;
  email: string;
  userName: string;
  password?: string;
}

const List = ({ user }: User) => {
  return (
    <>
      <Container>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Sobrenome</Th>
              <Th>Email</Th>
              <Th>Fone</Th>
              <Th>Cidade</Th>
              <Th>Rua</Th>
              <Th>Numero</Th>
              <Th>Latitude</Th>
              <Th>Longitude</Th>
              <Th>Nome de usuario</Th>
              <Th>ZipCode</Th>
            </Tr>
          </Thead>

          {user.map((item: IUserProps) => (
            <Tbody>
              <Tr>
                <Td>
                  {item.firstName}
                  {item.lastName}
                </Td>
                <Td>
                  {item.phone}
                  {item.city}
                  {item.street}
                  {item.number}
                  {item.zipcode}
                  {item.lat}
                  {item.long}
                  {item.id}
                  {item.email}
                  {item.userName}
                  {item.password}
                </Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </Container>
    </>
  );
};

export default List;
