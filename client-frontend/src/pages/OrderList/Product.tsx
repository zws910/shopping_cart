import { Card, Button } from 'react-bootstrap'
import './Product.css'
import { getAssestsFile } from '@/utils/utils'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showCart, add } from '@/store/cartSlice'

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
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation()
    dispatch(showCart())
    dispatch(add(item))
  }

  const handleClick = () => {
    navigate('/order/' + item.id, { state: item })
  }

  return (
    <Card className="product-wrapper" onClick={handleClick}>
      <Card.Img
        variant="top"
        src={getAssestsFile(item.imgUrl)}
        className="item-picture"
      />
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
