import { UserType } from "../../ts";
import TableUser from "../TableUser";
import { Tbody } from "./styles";

type User = {
  user: [];
};

const List = ({ user }: User) => {
  return (
    <>
      {user &&
        user.map((item: UserType) => (
          <Tbody>
            <TableUser
              key={item.id}
              id={item.id}
              firstname={item.name.firstname}
              lastname={item.name.lastname}
              email={item.email}
              phone={item.phone}
              city={item.address.city}
              number={item.address.number}
              username={item.username}
              lat={item.address.geolocation.lat}
              long={item.address.geolocation.long}
              street={item.address.street}
              password={item.password}
              zipcode={item.address.zipcode}
            />
          </Tbody>
        ))}
    </>
  );
};

export default List;
