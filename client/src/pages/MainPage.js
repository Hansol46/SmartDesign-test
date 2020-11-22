import React from "react";
import CreateProductForm from "../components/CreateProductForm";
import MainPageCard from "../components/MainPageCard";

function MainPage({
  filterCards,
  basketCounter,
  setName,
  setDescription,
  description,
  nameProduct,
  handleCreate,
}) {
  return (
    <div className="main">
      <CreateProductForm
        handleCreate={handleCreate}
        nameProduct={nameProduct}
        description={description}
        setDescription={setDescription}
        setName={setName}
      />

      <div className="cards">
        {filterCards.map(({ _id, description, nameProduct, imgProduct }) => (
          <MainPageCard
            key={_id}
            id={_id}
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
