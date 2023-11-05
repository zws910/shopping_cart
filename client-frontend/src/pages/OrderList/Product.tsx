import { Card, Button } from 'react-bootstrap'
import './Product.css'
import { getAssestsFile } from '@/utils/utils'
import { useSelector, useDispatch } from 'react-redux'
import { showCart, hideCart, add } from '@/store/cartSlice'

interface ProductProps {
  item: {
    id: number
    name: string
    price: string
    imgUrl: string
  }
}

const Product: React.FC<ProductProps> = (props) => {
  const { item } = props

  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(showCart())
    dispatch(add(item))
  }

  return (
    <Card className="product-wrapper">
      <Card.Img variant="top" src={getAssestsFile(item.imgUrl)} className='item-picture' />
      <div className="card-overlay">
        <Button variant="light" className="add-btn" onClick={handleAddToCart}>
          ADD TO CART
        </Button>
      </div>
      <Card.Body>
        <div className="item-name">{item.name}</div>
        <div className="item-price">{item.price}</div>
        {/* <Button className='add-btn' variant="primary">ADD TO CART</Button> */}
      </Card.Body>
    </Card>
  )
}

export default Product
