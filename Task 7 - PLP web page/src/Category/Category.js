import Buttons from "../Componets/Buttons";
import "./Category.css";

const Category = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="category-title">Category</h2>
        <div className="category-flex">
          <Buttons onClickHandler={handleClick} value="" title="All Products" />
          <Buttons onClickHandler={handleClick} value="women" title="Women" />
          <Buttons onClickHandler={handleClick} value="men" title="Men" />
          <Buttons onClickHandler={handleClick} value="kids" title="Kids" />
        </div>
      </div>
    </>
  );
};
export default Category;
