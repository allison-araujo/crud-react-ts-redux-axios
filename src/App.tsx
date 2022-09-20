import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import AddUser from "./features/AddUser";
import Dashboard from "./features/Dashboard";

import EditUser from "./features/EditUser";
import ListUser from "./features/User";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header title="Cadastro de Usuários" />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-user" element={<AddUser />} />
          <Route path="/list-user" element={<ListUser />} />
          <Route path="/update-user/:id" element={<EditUser />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
