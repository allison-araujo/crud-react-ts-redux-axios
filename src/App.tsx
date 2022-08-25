import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import AddUser from "./Pages/AddUser";
import Dashboard from "./Pages/Dashboard";
import Delete from "./Pages/DeleteUser";
import EditUser from "./Pages/EditUser";
import User from "./Pages/User";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header title="Teste Front End Edesoft" />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/list" element={<User />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/update/:id" element={<EditUser />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
