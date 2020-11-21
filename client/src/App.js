import React, { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import { Route } from "react-browser-router";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
// import CreateProduct from "./components/CreateProduct";
import instance from "./API/axios";
import ProfilePage from "./pages/ProfilePage";
import MainPageCard from "./components/MainPageCard";
import Mans from "./pages/FilterProduct/Mans";
import Womans from "./pages/FilterProduct/Womans";
// import MainPageCard from "./components/MainPageCard";

// NO FOTO
const photo =
  "https://neuronsk.ru/upload/medialibrary/771/771dad7444a2937b6085360951e048b1.png";





function App() {
  // BASKET COUNTER HOOK
  const [counter, setCounter] = useState(2);
  const basketCounter = () => {
    setCounter(counter + 1);
  };

  // CARDS (DB MONGODB)
  const [cards, setCards] = useState([]);

  // CREATE PRODUCT
  const [nameProduct, setName] = useState("");
  const [description, setDescription] = useState("");

  // DOWNLOAD FILES
  const fileInput = React.createRef();

  // GET DATA
  useEffect(() => {
    async function fetchData() {
      const response = await instance.get("/cards");
      setCards(response.data);
    }
    fetchData();
  }, []);

  // SEARCH PRODUCT
  const [searchProduct, setSearch] = useState("");
  const search = () => {
    let filterCards = cards.filter((card) => {
      const products = card.nameProduct
        .toLowerCase()
        .includes(searchProduct.toLowerCase());
      return products;
    });
    console.log(filterCards);
    setCards(filterCards);
  };

  // ADD NEW CARDS
  const handleCreate = () => {
    setCards([
      ...cards,
      {
        nameProduct: nameProduct,
        description: description,
        imgProduct: photo,
      },
    ]);
  };


  // FILTER 

  return (
    <>
      <Header
        counter={counter}
        search={search}
        searchProduct={searchProduct}
        setSearch={setSearch}
      />

      <div className="wrapper">
        <NavBar 
        />
        {/* <Route to='/mans' render={() => (<Mans cards={cards}/>)} />
        <Route to='/womans' render={() => (<Womans cards={cards} />)} />  */}



        <Route
          path="/"
          exact
          render={() => (
            <MainPage
              fileInput={fileInput}
              handleCreate={handleCreate}
              cards={cards}
              nameProduct={nameProduct}
              description={description}
              basketCounter={basketCounter}
              setName={setName}
              setDescription={setDescription}
            />
          )}
        />
        <Route path="/product" component={ProductPage} />
        <Route path="/profile" component={ProfilePage} />
      </div>
    </>
  );
}

export default App;
