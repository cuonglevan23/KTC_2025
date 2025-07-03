import NewItem from "./NewItem"; // Đường dẫn đúng tới NewItem

interface INewItemData {
  id: number;
  thumbnail: string;
  title: string;
  price: string;
  sale: string;
}


const NewItemList = ({data}: {data: INewItemData[]}) => {
  return (
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <NewItem
          key={item.id}
          thumbnail={item.thumbnail}
          title={item.title}
          price={item.price}
          sale={item.sale}
        />
      ))}
    </div>
  );
};

export default NewItemList;
