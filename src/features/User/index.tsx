import { useAppSelector } from "../../hooks/useRedux";
import { RootState } from "../../store";
import { Container, Table, Th, Thead, Tr } from "./styles";

const UsersList = () => {
  const userValues = useAppSelector((state: RootState) => state);
  console.log("userValues", userValues);

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
        {/* <List user={userValues} /> */}
      </Table>
    </Container>
  );
};

export default UsersList;
