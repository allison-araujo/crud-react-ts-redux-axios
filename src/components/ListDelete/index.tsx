import { UserDelete } from "../../ts";
import { Container, Show } from "./styles";

type User = {
  user: [];
};

const ListDelete = ({ user }: User) => {
  return (
    <Container>
      {user.map((item: UserDelete) => (
        <Show key={item.id}>
          {item.firstName}
          {item.email}
          {item.phone}
        </Show>
      ))}
    </Container>
  );
};

export default ListDelete;
