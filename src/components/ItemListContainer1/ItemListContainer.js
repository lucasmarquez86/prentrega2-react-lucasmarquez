import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        
        asyncFunc(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoryId])
    
    return (
    <div>
        <h1>Productos</h1>
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
        <ItemList products={products}/>
    </div>
 )
}

export default ItemListContainer