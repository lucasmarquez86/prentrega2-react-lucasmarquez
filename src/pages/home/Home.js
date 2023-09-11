import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const Home = () => {
  return (
    <div>
      <img
        src="https://scontent.fepa4-1.fna.fbcdn.net/v/t39.30808-6/215022515_142564844643953_8930159090378569076_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeGMQ1BO2SdjNp1DZrO4xJxs1n3IgpkgyZDWfciCmSDJkF3_NTpe6jGWDF6yBZsFErk&_nc_ohc=NDpNzkdWbnMAX8j0eEj&_nc_ht=scontent.fepa4-1.fna&oh=00_AfAYG9gbheGzbD48CpnhDZYG7xEP-B4cOAp8bBxDwN_0qg&oe=6502B896"
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
