import React from "react";
import NewItem from "./NewItem"; // Đường dẫn đúng tới NewItem

interface INewItemData {
  id: number;
  thumbnail: string;
  title: string;
  price: string;
  sale: string;
}

const products: INewItemData[] = [
  {
    id: 1,
    title: "Sản phẩm A",
    thumbnail: "https://i.ex-cdn.com/danviet.vn/files/content/2025/05/19/tien-1944.jpg",
    price: "1.000.000đ",
    sale: "Giảm 20%",
  },
  {
    id: 2,
    title: "Sản phẩm B",
    thumbnail: "https://i.ex-cdn.com/danviet.vn/files/content/2025/05/19/tien-1944.jpg",
    price: "2.000.000đ",
    sale: "Giảm 10%",
  },
  {
    id: 3,
    title: "Sản phẩm C",
    thumbnail: "https://i.ex-cdn.com/danviet.vn/files/content/2025/05/19/tien-1944.jpg",
    price: "3.000.000đ",
    sale: "",
  },
  {
    id: 4,
    title: "Sản phẩm C",
    thumbnail: "https://i.ex-cdn.com/danviet.vn/files/content/2025/05/19/tien-1944.jpg",
    price: "3.000.000đ",
    sale: "",
  },
];

const NewItemPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">



        {products.map((product) => (
          <NewItem
            key={product.id}
            thumbnail={product.thumbnail}
            title={product.title}
            price={product.price}
            sale={product.sale}
          />
        ))}
      </div>
    </div>
  );
};

export default NewItemPage;
