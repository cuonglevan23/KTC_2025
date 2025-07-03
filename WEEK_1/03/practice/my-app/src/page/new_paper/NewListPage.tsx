import NewItem from "./newItem";

const newlist = [
  {
    id: 1,
    title:
      "Hoa hậu Nguyễn Thúc Thùy Tiên bị bắt trong vụ kẹo rau củ Kera",
    thumbnail:
      "https://i.ex-cdn.com/danviet.vn/files/content/2025/05/19/tien-1944.jpg",
    addTime: "4 năm trước",
  },
  {
    id: 2,
    title:
      "Hoa hậu Nguyễn Thúc Thùy Tiên bị bắt trong vụ kẹo rau củ Kera",
    thumbnail:
      "https://i.ex-cdn.com/danviet.vn/files/content/2025/05/19/tien-1944.jpg",
    addTime: "4 năm trước",
  },
  {
    id: 3,
    title:
      "Hoa hậu Nguyễn Thúc Thùy Tiên bị bắt trong vụ kẹo rau củ Kera",
    thumbnail:
      "https://i.ex-cdn.com/danviet.vn/files/content/2025/05/19/tien-1944.jpg",
    addTime: "4 năm trước",
  },
  {
    id: 4,
    title:
      "Hoa hậu Nguyễn Thúc Thùy Tiên bị bắt trong vụ kẹo rau củ Kera",
    thumbnail:
      "https://i.ex-cdn.com/danviet.vn/files/content/2025/05/19/tien-1944.jpg",
    addTime: "4 năm trước",
  },
];



const NewlistPage = () => {
  return (
    <div className="App">
      <header className="App-header flex items-center justify-between px-4 py-2 border-b border-gray-300">
        <h1 className="text-3xl font-bold underline">New Paper</h1>
        <p className="text-blue-600 cursor-pointer hover:underline">Xem Thêm</p>
      </header>
      <main className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {newlist.map((item) => (
            <NewItem
              key={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              addTime={item.addTime}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default NewlistPage
