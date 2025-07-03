interface INewItemProps {
  thumbnail: string;
  title: string;
  addTime: string;
}

const NewItem = ({ thumbnail, title, addTime }: INewItemProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md mx-auto p-4">
      <div className="w-full h-48 overflow-hidden rounded-md mb-4">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="text-sm text-gray-500">
        <span>{addTime}</span>
      </div>
    </div>
  );
};

export default NewItem;
