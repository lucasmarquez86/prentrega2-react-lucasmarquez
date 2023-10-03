import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebaseConfig/config';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const { itemId } = useParams();

    useEffect(() => {
      setLoading(true);
      console.log("ID del item:", itemId ); 
      const docRef = doc(db, 'items', itemId );
      console.log("Referencia del documento:", docRef); 
  
      getDoc(docRef)
          .then(snapshot => {
              const data = snapshot.data();
              const detailProduct = { id: snapshot.id, ...data };
              console.log("Producto cargado:", detailProduct); 
              setProduct(detailProduct);
          })
          .catch(error => console.log(error))
          .finally(() => setLoading(false));
  }, [itemId ]);
  
    return (
        <section className='container py-4'>
            { loading ? <Loader /> : 
            <ItemDetail {...product} />}
    </section> 
    )
}

export default ItemDetailContainer;