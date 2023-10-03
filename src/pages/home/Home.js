import React from 'react';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import banner from '../../assets/banner.jpg'; // Ruta relativa desde el directorio actual

const Home = () => {
  return (
    <div>
      <img
        src={banner}
        alt="Banner"
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="container">
        <div className="row">
          <ItemListContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
