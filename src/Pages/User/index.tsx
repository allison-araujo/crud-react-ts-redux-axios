import { useEffect, useState } from "react";
import User from "../../Api/api";
import Content from "../../components/Content";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
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
    firstname: string;
    lastname: string;
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
          firstName: item.name.firstname,
          lastName: item.name.lastname,
          id: item.id,
          email: item.email,
          userName: item.userName,
          phone: item.phone,
          city: item.address.city,
          number: item.address.number,
          street: item.address.street,
          lat: item.address.geolocation.lat,
          long: item.address.geolocation.long,
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
    <Layout>
      <Header title="Teste Front End Edesoft" />
      <Content>
        <Test />
        {filterUser.length === 0 ? (
          ""
        ) : (
          <Loading spinning={loading}>
            <List user={filterUser} />
          </Loading>
        )}
      </Content>
    </Layout>
  );
};

export default ListUser;
