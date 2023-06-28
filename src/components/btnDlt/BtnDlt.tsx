type BtnDltProps = {
  deleteProduct: (id: number) => void;
  id: number;
};

const BtnDlt: React.FC<BtnDltProps> = ({ deleteProduct, id }) => {
  return (
    <button
      type="button"
      onClick={() => {
        deleteProduct(id);
      }}
    >
      <img src="./img/icons/cross.svg" alt="Delete" />
    </button>
  );
};

export default BtnDlt;
