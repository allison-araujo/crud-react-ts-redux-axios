import { useEffect, useState } from "react";
import User from "../../Api/api";
import Content from "../../components/Content";
import List from "../../components/List";
import Loading from "../../components/Loading";
import { Test } from "./styles";

interface IDataUserProps {
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;

    geolocation: {
      lat: string;
      long: string;
    };
  };

  id: number;
  email: string;
  userName: string;
  password?: string;

  name: {
    firstName: string;
    lastName: string;
  };
  phone: string;
}

const ListUser = () => {
  const [loading, setLoading] = useState(false);
  const [filterUser, setFilterUser] = useState([] as any);
  const user = new User();

  useEffect(() => {
    try {
      setLoading(true);
      user.listUsers().then(res => {
        const filterData = res.map((item: IDataUserProps) => ({
          first: item.name.firstName,
          last: item.name.lastName,
          id: item.id,
          email: item.email,
          userName: item.userName,
          phone: item.phone,
          city: item.address.city,
          number: item.address.number,
          street: item.address.street,
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
      <Test>Teste </Test>
      {filterUser.length === 0 ? (
        ""
      ) : (
        <Loading spinning={loading}>
          <List user={filterUser} />
        </Loading>
      )}
    </Content>
  );
};

export default ListUser;
