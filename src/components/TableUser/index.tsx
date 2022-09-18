import { Th, Tr } from "./styles";

const TableUser = ({
  id,
  email,
  username,
  firstname,
  lastname,
  city,
  street,
  number,
  long,
  lat,
  password,
}: any) => {
  return (
    <Tr key={id}>
      <Th> {id}</Th>
      <Th>{email}</Th>
      <Th>{username}</Th>
      <Th>{password}</Th>
      <Th>{firstname}</Th>
      <Th>{lastname}</Th>
      <Th>{city}</Th>
      <Th>{street}</Th>
      <Th>{number}</Th>
      <Th>{lat}</Th>
      <Th>{long}</Th>
    </Tr>
  );
};

export default TableUser;
