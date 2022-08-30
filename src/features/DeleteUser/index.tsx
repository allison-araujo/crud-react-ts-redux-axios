import { useState } from "react";
import Content from "../../components/Content";

import { Test } from "./styles";

const Delete = () => {
   const dispatch = useDispatch();
   const users = useSelector(store => store.users);

   const handleRemoveUser = (id) => {
     dispatch(deleteUser({ id }));

  const [loading, setLoading] = useState(false);
  const [filterUser, setFilterUser] = useState([] as any);

  return (
    <Content>
      <Test />
    </Content>
  );
};

export default Delete;
