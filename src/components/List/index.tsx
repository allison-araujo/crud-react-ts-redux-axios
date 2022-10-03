import { UserType } from "../../ts";
import TableUser from "../TableUser";
import { Tbody } from "./styles";

type ArrayUser = {
  user: [];
};

const List = ({ user }: ArrayUser) => {
  return (
    <>
      {user !== null &&
        user.map((item: UserType) => (
          <Tbody key={item.id}>
            <TableUser
              key={item.id}
              lastname={item.lastname}
              firstname={item.firstname}
              email={item.email}
              phone={item.phone}
              city={item.city}
              number={item.number}
              username={item.username}
              lat={item.lat}
              long={item.long}
              street={item.street}
              password={item.password}
              zipcode={item.zipcode}
              id={0}
            />
          </Tbody>
        ))}
    </>
  );
};

export default List;
