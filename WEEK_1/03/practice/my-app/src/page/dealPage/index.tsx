import React, { useState } from 'react';
import ItemList from "./itemlist";

interface INewItemData {
  id: number;
  thumbnail: string;
  shop_name: string;
  title: string;
  price: string;
  price_sale: string;
  sale: number;
  sold: number;
  review: number;
  discount_off: string;
}

const DealPage = () => {
  const [items, setItems] = useState<INewItemData[]>([
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300&h=200&fit=crop",
      shop_name: "YOUNG SHOP",
      title: "LG White Front Load Steam Washer",
      price: "$1,422.7",
      price_sale: "$1,025.5",
      sale: 39,
      sold: 10,
      review: 4,
      discount_off: "18% off"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300&h=200&fit=crop",
      shop_name: "YOUNG SHOP", 
      title: "Edifier Powered Bookshelf Speakers",
      price: "$96",
      price_sale: "$85",
      sale: 13,
      sold: 15,
      review: 4,
      discount_off: "18% off"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop",
      shop_name: "YOUNG SHOP",
      title: "Amcrest Security Camera in White Color", 
      price: "$62.99",
      price_sale: "$45.9",
      sale: 37,
      sold: 20,
      review: 4,
      discount_off: "18% off"
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=200&fit=crop",
      shop_name: "YOUNG SHOP",
      title: "Grand Slam Indoor Of Show Jumping Novel",
      price: "$41.99", 
      price_sale: "$32.99",
      sale: 27,
      sold: 22,
      review: 4,
      discount_off: "18% off"
    },
    {
      id: 5,
      thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
      shop_name: "YOUNG SHOP",
      title: "Sound Intone I65 Earphone White Version",
      price: "$106.96",
      price_sale: "$100.99", 
      sale: 6,
      sold: 10,
      review: 4,
      discount_off: "18% off"
    },
    {
      id: 6,
      thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
      shop_name: "YOUNG SHOP",
      title: "Korea Long Sofa Fabric In Blue Navy Color",
      price: "$670.2",
      price_sale: "$567.8",
      sale: 18,
      sold: 79, 
      review: 4,
      discount_off: "18% off"
    }
  ]);

  const handleRatingChange = (itemId: number, newRating: number) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === itemId 
          ? { ...item, review: newRating }
          : item
      )
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 mr-4">Deal of the day</h1>
            <div className="bg-red-500 text-white px-3 py-1 rounded text-sm font-medium">
              End in: 6:17:17:39
            </div>
          </div>
          <button className="text-gray-600 text-sm underline hover:text-gray-800">
            View all
          </button>
        </div>
        <ItemList data={items} onRatingChange={handleRatingChange} />
      </div>
    </div>
  );
};

export default DealPage;