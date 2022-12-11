import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {
  collection,
  getDocs,
  query,
  where,
  getFirestore,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { categoryName } = useParams();

  const getProducts = () => {
    const db = getFirestore();
    const queryBase = collection(db, 'products');
    const querySnapshot = categoryName
    ? query(queryBase, 
      where('categoryId', '==', categoryName))
    : queryBase;
    
    getDocs(querySnapshot)
    .then((response) => {
      const data = response.docs.map((product) => {
        return { id: product.id, ...product.data() }
      });
      setProductList(data);
    })
    .catch((error) => {console.log(error);});
};

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, [categoryName])

  return (
    <div className='listContainer'>
      <ItemList productList={productList} />
    </div>
  )
}

export default ItemListContainer