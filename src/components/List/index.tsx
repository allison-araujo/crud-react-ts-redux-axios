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
  zipcode?: string;
  lat: string;
  long: string;
  id?: number;
  email: string;
  userName?: string;
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
            </Tr>
          </Thead>

          {user.map((item: IUserProps) => (
            <Tbody>
              <Tr key={item.id}>
                <Td>{item.firstName}</Td>
                <Td>{item.lastName}</Td>
                <Td>{item.email}</Td>
                <Td>{item.phone}</Td>
                <Td>{item.city}</Td>
                <Td>{item.street}</Td>
                <Td>{item.number}</Td>
                <Td>{item.lat}</Td>
                <Td>{item.long}</Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </Container>
    </>
  );
};

export default List;
