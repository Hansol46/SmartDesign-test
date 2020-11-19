import React from "react";
import CreateProduct from "../components/CreateProduct";
import MainPageCard from "../components/MainPageCard";

function MainPage({ cards, basketCounter, setName, setDescription}) {
  
  return (
    <div className="main">
      <CreateProduct 
      nameProduct={cards.nameProduct} 
      description={cards.description} 
      setDescription={setDescription}
      setName={setName}
      />


      <div className="cards">


        {cards.map( ({_id, description, nameProduct, imgProduct}) => (
          <MainPageCard 
          key={_id}
          description={description}
          nameProduct={nameProduct}
          imgProduct={imgProduct}
          basketCounter={basketCounter}
          />
        ))}



        {/* <MainPageCard
          basketCounter={basketCounter}
          description='Стоит отметить, что для Nike – это вторые «умные» кроссовки. 
          Предшественником была модель Hyper Adapt 1.0, вышедшая в 2016 году.'
          nameProduct="Nike мужские спортивные"
          imgProduct="https://okno.world/wp-content/uploads/2019/02/cover-min.jpg"
        />
        <MainPageCard 
        basketCounter={basketCounter}
        description='Кроссовки из новой коллекции 2019. Оригинал. 
        Из Европы., Гармоничное цветовое сочетание., 
        Белая высокая подошва 5,5 см., Качественные и модные.'
        nameProduct="Pull and Bear мужские спортивные"
        imgProduct="https://images.shafastatic.net/85482484"
        />
        <MainPageCard 
        basketCounter={basketCounter}
        description='Хорошее качество и недорогая цена. Гармоничное цветовое сочетание., 
        Белая высокая подошва 5,5 см., Качественные и модные.'
        nameProduct="Filla женские спортивные"
        imgProduct="https://mirobuvi.com.ua/images/products/700_main_b.jpg"
        />
        <MainPageCard 
        basketCounter={basketCounter}
        description='Умные кроссовки с автошнуровкой'
        nameProduct="Nike женские спортивные"
        imgProduct="https://htstatic.imgsmail.ru/pic_image/002a887dbe41dd282ee01125237d04b6/840/473/1648592/"
        />
        <MainPageCard 
        basketCounter={basketCounter}
        description='Коллекция The Village интересный дизайн и не менее интересный колорит цветов'
        nameProduct="Puma мужские спортивные"
        imgProduct="https://cdn.the-village.ru/the-village.ru/post-cover/sJJKFEyHHGxZZQGZZsrzow-default.png"
        />
        <MainPageCard 
        basketCounter={basketCounter}
        description='Модные кроссовки коллекция 2019/2020'
        nameProduct="Chanel женские спортивные"
        imgProduct="https://oskelly.ru/blog/wp-content/uploads/2019/04/1-8.jpg"
        /> */}
      </div>
    </div>
  );
}

export default MainPage;
