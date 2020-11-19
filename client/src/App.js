import React, { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import { Route } from "react-browser-router";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import CreateProduct from "./components/CreateProduct";
import instance from "./API/axios";

function App() {
  // BASKET COUNTER HOOK
  const [counter, setCounter] = useState(2);
  const basketCounter = () => {
    setCounter(counter + 1);
  };
  // API DATA
  const [cards, setCards] = useState([])

  // CREATE PRODUCT 
  const [nameProduct, setName] = useState("");
  const [description, setDescription] = useState("");
  // const handleCreate = () => {

  // };

  useEffect( () => {
    async function fetchData () {
      const response = await instance.get('/cards')
      setCards(response.data)
    }
    fetchData()
  }, [])

  console.log(cards)
  return (
    <>
      <Header counter={counter} />

      <div className="wrapper">
        <NavBar />
        <Route
          path="/"
          exact
          render={() => <MainPage 
            cards={cards}
            basketCounter={basketCounter} 
            setName={setName}
            setDescription={setDescription}
          />}
        />
        <Route path="/product" component={ProductPage} />
      </div>
    </>
  );
}

export default App;
