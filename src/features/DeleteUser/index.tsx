import { useEffect, useState } from "react";
import Content from "../../components/Content";
import ListDelete from "../../components/ListDelete";
import Loading from "../../components/Loading";
import User from "../../services/api";
import { Test } from "./styles";

interface IDataUserProps {
  address: {
    city: string;
    street: string;
    number: number;
  };

  id: number;
  email: string;
  userName: string;
  password?: string;

  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
}

const Delete = () => {
  // const dispatch = useDispatch();
  // const users = useSelector(store => store.users);

  // const handleRemoveUser = (id) => {
  //   dispatch(deleteUser({ id }));

  const [loading, setLoading] = useState(false);
  const [filterUser, setFilterUser] = useState([] as any);
  const user = new User();

  useEffect(() => {
    try {
      setLoading(true);
      user.listUsers().then(res => {
        const filterData = res.map((item: IDataUserProps) => ({
          firstName: item.name.firstname,
          lastName: item.name.lastname,
          id: item.id,
          email: item.email,
        }));
        setFilterUser(filterData);
        setLoading(false);
      });
    } catch (error) {
      alert("Nao foi possivel buscar Pessoa");
      setLoading(false);
    }
  }, []);

  return (
    <Content>
      <Test />
      {filterUser.length === 0 ? (
        ""
      ) : (
        <Loading spinning={loading}>
          <ListDelete user={filterUser} />
        </Loading>
      )}
    </Content>
  );
};

export default Delete;
