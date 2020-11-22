import React from "react";

function InfoProduct(props) {
  const { nameProduct, description, imgProduct } = props;

  return (
    <div className="infoProduct">
      <h1>Более подробная информация о товаре:</h1>
      <div className='productBlock'>
        <div>
          <img src={imgProduct} />
        </div>
        <div>
          <p> <span>Название:</span> {nameProduct}</p>
          <p> <span>Описание:</span> {description}</p>
          <p> <span>Отзывов:</span> 5</p>
          <p> <span>Количество на складе:</span> осталось 21</p>
        </div>
      </div>
    </div>
  );
}

export default InfoProduct;
