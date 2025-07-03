import Item from "./item";

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

interface ItemListProps {
  data: INewItemData[];
  onRatingChange?: (itemId: number, newRating: number) => void;
}

const ItemList = ({ data, onRatingChange }: ItemListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {data.map((item, index) => (
        <Item
          key={item.id || index}
          thumbnail={item.thumbnail}
          shop_name={item.shop_name}
          title={item.title}
          price={item.price}
          price_sale={item.price_sale}
          sale={item.sale}
          sold={item.sold}
          review={item.review}
          discount_off={item.discount_off}
        />
      ))}
    </div>
  );
};

export default ItemList;