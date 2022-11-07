import './ItemListContainer.css'

const ItemListContainer = (props) => {
  console.log(props)
  return (
    <div className='greeting'>
      <h2 className='greeting-txt'>{props.name}</h2>
    </div>
  )
}

export default ItemListContainer