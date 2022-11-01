import { useSelector } from "react-redux";
import List from "../../components/List";
import { getAllUsers } from "../UserSlice/UserSlice";
import { Container, Table, Th, Thead, Tr } from "./styles";

const UsersList = () => {
  const users = useSelector(getAllUsers);

  return (
    <Container>
      <Table>
        <Thead>
          <Tr>
            <Th>Código</Th>
            <Th>Name</Th>
            <Th>Sobrenome</Th>
            <Th>Email</Th>
            <Th>Fone</Th>
            <Th>Cidade</Th>
          </Tr>
        </Thead>
        <List user={users} />
      </Table>
    </Container>
  );
};

export default UsersList;
