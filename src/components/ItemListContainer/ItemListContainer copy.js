import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Filters from '../Filters/Filters';
import ItemList from '../ItemList/ItemList';
import { getItems } from '../../firebaseConfig/services/items';

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);

    getItems(categoryId)
      .then((snapshots) => {
        const products = snapshots.docs.map((snapshot) => ({ id: snapshot.id, ...snapshot.data() }));
        setProducts(products);
      })
      .catch((err) => console.log({ err }))
      .finally(() => setLoading(false));
  }, [categoryId]);

  const handleFilterProducts = (e) => {
    e.preventDefault();
    const filter = products.filter(({ name }) => name.toLowerCase().includes(search));

    setFilterProducts(filter);
  };

  return (
    <>
      <h1 className="text-center mb-5 display-4 fw-bold text-indigo bg-gradient bg-gradient-to-r from-indigo-700 to-purple-700">
        E-COMMERCE
      </h1>
      <div className="mb-5 mx-auto">
        <Filters />
        <form onSubmit={handleFilterProducts} className="max-w-md mt-5 d-flex">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search for title"
            name="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Buscar
          </button>
        </form>
      </div>
      <ItemList products={filterProducts.length ? filterProducts : products} loading={loading} />
    </>
  );
};

export default ItemListContainer;
