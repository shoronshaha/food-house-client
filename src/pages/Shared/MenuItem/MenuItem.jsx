import PropTypes from "prop-types";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  // console.log(name);
  return (
    <div className="flex space-x-5">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />

      <div className="">
        <h3 className="uppercase">{name}--------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.node,
};

export default MenuItem;
