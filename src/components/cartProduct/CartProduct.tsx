import "./CartProduct.scss";
import priceForm from "./../utils/priceForm";
import BtnDlt from "../btnDlt/BtnDlt";
import Count from "../count/Count";

interface CartProductProps {
  product: {
    img: string;
    title: string;
    priceTotal: number;
    count: number;
    id: number;
  };
  deleteProduct: (id: number) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  changeValue: (id: number, value: number) => void;
}

const CartProduct: React.FC<CartProductProps> = ({
  product,
  deleteProduct,
  increase,
  decrease,
  changeValue,
}) => {
  const { img, title, priceTotal, count, id } = product;
  return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/products/${img}`} alt={title} />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        <Count
          count={count}
          increase={increase}
          decrease={decrease}
          changeValue={changeValue}
          id={id}
        />
      </div>
      <div className="product__price">{priceForm.format(priceTotal)} $</div>
      <div className="product__controls">
        <BtnDlt deleteProduct={deleteProduct} id={id} />
      </div>
    </section>
  );
};

export default CartProduct;
