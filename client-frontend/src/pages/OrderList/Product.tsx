import { Card, Button, OverlayTrigger } from 'react-bootstrap'
import './Product.css'
import { getAssestsFile } from '@/utils/utils'

interface ProductProps {
  item: {
    name: string
    price: string
    imgUrl: string
  }
}

const Product: React.FC<ProductProps> = (props) => {
  const { item } = props

  return (
    <Card style={{ width: '18rem' }} className="product-wrapper">
        <Card.Img variant="top" src={getAssestsFile(item.imgUrl)} />
        <div className="card-overlay">
          <Button variant="light" className="add-btn">
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
