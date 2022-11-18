import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { data } from '../../data/data';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [productList, setProductList] = useState([]);
  const { categoryName } = useParams();
  const getProducts = new Promise ((resolve, reject)=> {
    setTimeout(() => {
      if (categoryName){
        const filteredData = data.filter((producto) => {
          return producto.category === categoryName
        });
        resolve(filteredData);
      }else{
        resolve(data);
      }
      resolve(data);
    }, 2000)
  });

  useEffect (() => {
    getProducts.then((respuesta) => {
      setProductList(respuesta);
    })
    setTimeout(() => {

    },3000)
    // eslint-disable-next-line
  },[categoryName]);
  return (
    <div>
     <ItemList productList={productList} />
    </div>
  )
}

export default ItemListContainer