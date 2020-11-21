import React from "react";
import CreateProduct from "../components/CreateProduct";
import MainPageCard from "../components/MainPageCard";

function MainPage({ cards, basketCounter, setName, setDescription, description, nameProduct, handleCreate, fileInput}) {

  return (
    <div className="main">

      <CreateProduct
      fileInput={fileInput}
      handleCreate={handleCreate}
      nameProduct={nameProduct} 
      description={description} 
      setDescription={setDescription}
      setName={setName}
      />

      <div className="cards">

        {cards.map( ({_id, description, nameProduct, imgProduct}) => (
          <MainPageCard 
          fileInput={fileInput}
          key={_id}
          description={description}
          nameProduct={nameProduct}
          imgProduct={imgProduct}
          basketCounter={basketCounter}
          />
        ))}

      </div>

    </div>
  );
}

export default MainPage;
