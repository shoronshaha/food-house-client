import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import PropTypes from "prop-types";
const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  //   const [menu, setMenu] = useState([]);
  //   useEffect(() => {
  //     fetch("menu.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const popularItems = data.filter((item) => item.category === "popular");
  //         setMenu(popularItems);
  //         console.log(popularItems);
  //       });
  //   }, []);

  return (
    <section className="mb-12 text-center">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <button className="btn btn-outline border-0 border-b-4 bg-black uppercase">
        View Full Menu
      </button>
    </section>
  );
};

PopularMenu.propTypes = {
  item: PropTypes.node,
};

export default PopularMenu;
