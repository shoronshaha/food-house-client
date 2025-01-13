import PropTypes from "prop-types";

import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="mx-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 bg-black uppercase">
          order now
        </button>
      </Link>
    </div>
  );
};
MenuCategory.propTypes = {
  items: PropTypes.node,
  title: PropTypes.node,
  img: PropTypes.node,
};
export default MenuCategory;
