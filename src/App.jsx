import "./styles/app.css"
import { NavBar } from "./components/navBar"
import { ItemListContainer } from "./components/itemListContainer";
import { NewArrives } from "./components/newArrives";

export const App = () => {
  return (
    <>
        <NavBar></NavBar>
      <div className="pt-24">
        <NewArrives></NewArrives>
        <ItemListContainer greeting={"Buenass"}></ItemListContainer>
      </div>
    </>
  );
}



