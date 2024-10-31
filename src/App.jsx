import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Products } from "./pages/Products"
import { ProductDetail } from "./pages/ProductDetail"

function App() {

  return (
    <section>
      <Navbar />
      <Routes>
        <Route index element={<Products />}></Route>
        <Route element={<ProductDetail />} path="/details/:id" />
      </Routes>
    </section>
  )
}

export default App
