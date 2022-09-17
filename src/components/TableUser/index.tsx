import { Th, Tr } from "./styles";

export type PropsUser = {
  email: string;
  username: string;
  password: string;
  id: number;
  firstname: string;
  lastname: string;
  city: string;
  street: string;
  number: number;
  zipcode: string;
  lat: string;
  long: string;
  phone: string;
};

const TableUser = (user: PropsUser) => {
  return (
    <Tr key={user.id}>
      <Th> {user.id}</Th>
      <Th>{user.email}</Th>
      <Th>{user.username}</Th>
      <Th>{user.password}</Th>
      <Th>{user.firstname}</Th>
      <Th>{user.lastname}</Th>
      <Th>{user.city}</Th>
      <Th>{user.street}</Th>
      <Th>{user.number}</Th>
      <Th>{user.lat}</Th>
      <Th>{user.long}</Th>
    </Tr>
  );
};

export default TableUser;
