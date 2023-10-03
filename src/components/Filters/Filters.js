import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const Filters = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const categoriesCollection = collection(db, 'categories');

    getDocs(categoriesCollection)
      .then((snapshots) => {
        const categories = snapshots.docs.map((snapshot) => ({
          id: snapshot.id,
          ...snapshot.data(),
        }));
        setCategories(categories);
      })
      .catch((error) => {
        console.error('Error fetching categories: ', error);
      });
  }, []);

  return (
    <nav className='flex justify-center gap-2'>
      {categories.map(({ id, name }) => (
        <NavLink
          key={id} 
          end
          to={`/category/${name}`}
          className={({ isActive }) =>
            `px-2 py-1 rounded-md hover:bg-indigo-100 ${
              isActive ? 'bg-indigo-100' : ''
            }`
          }
        >
          {name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Filters;
