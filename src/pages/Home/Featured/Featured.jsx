import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "../Featured/Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-16">
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>

      <div className="md:flex justify-center bg-slate-400 bg-opacity-50 items-center py-8 px-16">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            voluptatem ea rerum veniam voluptatibus? Dolorem delectus soluta
            magnam enim ab! Iusto facere quis voluptas dolores labore, error
            eligendi corrupti! Perspiciatis
          </p>
          <button className="btn btn-outline border-0 border-b-4 bg-black uppercase">
            read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
