import "./styles/app.css"
import { NavBar } from "./components/navBar"
import { ItemListContainer } from "./components/itemListContainer";
import { NewArrives } from "./components/newArrives";
import { ItemCount } from "./components/itemCount"; 

export const App = () => {
  return (
    <>
      <NavBar/>
        <NewArrives></NewArrives>
        <ItemListContainer greeting={"Buenass"}></ItemListContainer>
    </>
  );
}



