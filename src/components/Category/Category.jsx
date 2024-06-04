const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div>
      <div className="flex justify-center items-center">
        <img className="w-1/4 py-2" src={logo} alt="" />
      </div>
      <h2 className="text=[#474747]">
        <b>{category_name}</b>
      </h2>
      <h2>{availability}</h2>
    </div>
  );
};

export default Category;
