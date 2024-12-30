import { Box } from "@chakra-ui/react";
import { Link, Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import Navbar from "./components/Navbar";

function App() {
  console.log("hello");
  return (
    <Box minH={"100vh"}>
      <Navbar />
      <nav style={{ padding: '10px', backgroundColor: '#282c34', color: 'white' }}>
        <Link to="/addProduct" style={{ color: 'white', textDecoration: 'none' }}>Add Product</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/addProduct" element={<AddProductPage />} />
      </Routes>
    </Box>
  )
}

export default App
