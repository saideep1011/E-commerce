import React from "react";
import "./collectionitem.scss";

export default function CollectionItem({ id, name, price, imageUrl }) {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span classname="name">{name}</span>
        <span classname="price">{price}</span>
      </div>
    </div>
  );
}
