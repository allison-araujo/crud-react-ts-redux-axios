import { Link, useParams } from "react-router-dom";
import Button from "../../components/Button";
import { Direction } from "./styles";

const Dashboard = () => {
  const { id } = useParams();
  return (
    <>
      <Direction>
        <Link style={{ textDecoration: "none" }} to={`/list`}>
          <Button text="Listar Usuários" />
        </Link>
        <Link style={{ textDecoration: "none" }} to={`/add`}>
          <Button text="Cadastrar Usuários" />
        </Link>
        <Link style={{ textDecoration: "none" }} to={`/add/${id}`}>
          <Button text="Editar Usuários" />
        </Link>
      </Direction>
    </>
  );
};

export default Dashboard;
