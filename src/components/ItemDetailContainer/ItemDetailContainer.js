import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const [productSelected, setProductSelected] = useState();
  const { id } = useParams();
  
  const getProduct = () => {
    const db = getFirestore();
    const query = doc(db, 'products', id);
    getDoc(query)
    .then((response) => { 
      setProductSelected({id: response.id, ...response.data()})
    })
    .catch(error => console.log(error))
      
  };

  useEffect (() => {
    getProduct();
    // eslint-disable-next-line
  }, [id])
  return (
    <div className='detailContainer'>
      
      {productSelected && 
     <ItemDetail productSelected={productSelected}></ItemDetail>
     }
    </div>
  )
}

export default ItemDetailContainer
