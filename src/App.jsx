import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Products } from "./pages/Products"
import { ProductDetail } from "./pages/ProductDetail"
import { Categories } from "./pages/Categories"

function App() {

  return (
    <section>
      <Navbar />

      <Routes>
        <Route index element={<Products />} />
        <Route element={<Categories />} path="/categories" />
        <Route element={<ProductDetail />} path="/details/:id" />
      </Routes>
      
    </section>
  )
}

export default App
