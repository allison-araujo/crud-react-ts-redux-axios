import { useEffect } from "react";
import List from "../../components/List";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { RootState } from "../../store";
import { getUserAsync } from "../UserSlice/UserSlice";
import { Container, Table, Th, Thead, Tr } from "./styles";

const UsersList = () => {
  const users = useAppSelector((state: RootState) => state);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserAsync());
  }, [dispatch]);

  return (
    <Container>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Sobrenome</Th>
            <Th>Email</Th>
            <Th>Fone</Th>
            <Th>Test</Th>
          </Tr>
        </Thead>
        <List user={users} />
      </Table>
    </Container>
  );
};

export default UsersList;
