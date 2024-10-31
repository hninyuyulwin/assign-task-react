import { CardComponent } from "../components/CardComponent";
import { Header } from "../components/Header";

export const Products = () => {
  return (
    <div>
        <Header />
        <CardComponent title="Products List" url="https://fakestoreapi.com/products" />
    </div>
  )
}
