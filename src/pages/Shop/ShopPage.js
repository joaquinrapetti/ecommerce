import React, { useState } from "react";
import SHOP_DATA from "./ShopData";
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";

const ShopPage = () => {
  const [shopInfo, setShopInfo] = useState({ collections: SHOP_DATA });

  const collections = shopInfo.collections;

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
