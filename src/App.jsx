import "./styles/app.css"
import { NavBar } from "./components/navBar"
import { ItemListContainer } from "./components/itemListContainer";

export const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer greeting={"Buenass"}></ItemListContainer>
    </div>
  );
}



