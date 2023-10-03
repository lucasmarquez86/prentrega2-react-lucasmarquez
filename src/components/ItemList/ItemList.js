import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <div className="container">
    <div className='row align-items-stretch '>
      {products.map((prod) => (
        <div key={prod.id} className='col-lg-3 col-md-4 col-sm-6 mb-4'>
          <Item {...prod} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default ItemList;
