import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import AddUser from "./features/AddUser";
import Dashboard from "./features/Dashboard";
import Delete from "./features/DeleteUser";
import EditUser from "./features/EditUser";
import User from "./features/User";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header title="Teste Front End Edesoft" />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/list" element={<User />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/update/:id" element={<EditUser />} />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
