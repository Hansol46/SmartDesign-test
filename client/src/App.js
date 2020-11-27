import React, { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import { Route } from "react-browser-router";
import Header from "./components/Header";
import instance from "./API/axios";
import ProfilePage from "./pages/ProfilePage";
import InfoProduct from "./components/InfoProduct";

// NO FOTO
const photo =
  "https://neuronsk.ru/upload/medialibrary/771/771dad7444a2937b6085360951e048b1.png";



function App() {
  // BASKET COUNTER HOOK
  const [counter, setCounter] = useState(2);
  const basketCounter = () => {
    setCounter(counter + 1);
  };

  // CARDS (DATA API)
  const [cards, setCards] = useState([]);

  // CREATE PRODUCT
  const [nameProduct, setName] = useState("");
  const [description, setDescription] = useState("");

  // GET DATA
  useEffect(() => {
    async function fetchData() {
      const response = await instance.get("/cards")
      setCards(response.data)
    }
    fetchData();
  }, []);

  
  // SEARCH PRODUCT
  const [searchProduct, setSearch] = useState("");
  const [filterCards, setFilter] = useState([])
    useEffect(()=> {
      setFilter(
        cards.filter( filterCard => 
          filterCard.nameProduct.toLowerCase().includes(searchProduct.toLowerCase()) || 
          filterCard.description.toLowerCase().includes(searchProduct.toLocaleLowerCase()) 
        )
      )
    },[searchProduct, cards ])

  // ADD NEW CARDS
  const handleCreate = async () => {
    await instance.post("/cards", {
      nameProduct: nameProduct,
      description: description
    }) 
    window.location.reload()
  };

  return (
    <>
      <Header
        counter={counter}
        searchProduct={searchProduct}
        setSearch={setSearch}
        cards={cards}
        setCards={setCards}
      />

      <div className="wrapper">
        <Route
          path="/"
          exact
          render={() => (
            <MainPage
              filterCards={filterCards}
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
        <Route path="/profile" component={ProfilePage} />
        {cards.map( (card) => (
          <Route path={`/product-info/${card._id}`}  key={card._id} render={ () => <InfoProduct {...card} />}/>
          ))}
      </div>
    </>
  );
}

export default App;
