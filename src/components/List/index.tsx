import { Container, Table, Tbody, Td, Th, Thead, Tr } from "./styles";

type User = {
  user: [];
  isDelete: boolean;
};

interface IUserProps {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  street?: string;
  number?: number;
  zipcode?: string;
  lat?: string;
  long?: string;
  id?: number;
  email: string;
  userName?: string;
  password?: string;
}

const List = ({ user, isDelete }: User) => {
  return (
    <>
      <Container>
        <Table>
          {isDelete ? (
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Sobrenome</Th>
                <Th>Email</Th>
              </Tr>
            </Thead>
          ) : (
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Sobrenome</Th>
                <Th>Email</Th>
                <Th>Fone</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
          )}

          {user.map((item: IUserProps) => (
            <Tbody>
              <Tr key={item.id}>
                <Td>{item.firstName}</Td>
                <Td>{item.lastName}</Td>
                <Td>{item.email}</Td>
                <Td>{item.phone}</Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </Container>
    </>
  );
};

export default List;
