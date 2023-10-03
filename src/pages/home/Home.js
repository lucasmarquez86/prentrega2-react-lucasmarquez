import './Home.css'
import React from 'react';
import banner from '../../assets/banner.jpg'; 
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <div>
        <img
          src={banner}
          alt="Banner"
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="container">
          <div className="row">
            <section className="accesos" id="accesos">
              <div className="accesoBoxUno">
                <div>
                  <h2>
                    <Link to="/category/pantalones" style={{ color: 'white', textDecoration: 'none' }}>
                      Pantalones
                    </Link>
                  </h2>
                </div>
              </div>
              <div className="accesoBoxDos">
                <div>
                  <h2>
                    <Link to="/category/buzos" style={{ color: 'white', textDecoration: 'none' }}>
                      Buzos
                    </Link>
                  </h2>
                </div>
              </div>
              <div className="accesoBoxTres">
                <div>
                  <h2>
                    <Link to="/category/remeras" style={{ color: 'white', textDecoration: 'none' }}>
                      Remeras
                    </Link>
                  </h2>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
