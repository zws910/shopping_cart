import { useLocation } from 'react-router-dom'
import { Carousel, Badge, Button } from 'react-bootstrap'
import { getAssestsFile } from '@/utils/utils'
import Cart from '@/components/Cart'
import { useDispatch } from 'react-redux'
import { showCart, add } from '@/store/cartSlice'
import './index.css'

type Product = {
  id: number
  name: string
  price: string
  imgUrl: string
  count?: number
}

const OrderDetail = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const itemDetail: Product = location.state

  const handleAddToCart = () => {
    dispatch(add(itemDetail))
    dispatch(showCart())
  }

  return (
    <div className="order-detail">
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            src={getAssestsFile('1.webp')}
            alt=""
            className="carousel-image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={getAssestsFile('2.webp')}
            alt=""
            className="carousel-image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={getAssestsFile('3.webp')}
            alt=""
            className="carousel-image"
          />
        </Carousel.Item>
      </Carousel>
      <div className="detail-desc">
        <div>{itemDetail.name}</div>
        <div>
          designed by <span style={{ fontWeight: 'bold' }}>Vincent Zheng</span>
        </div>
        <Badge bg="warning">Trending</Badge>
        <div style={{ marginTop: 20 }}>
          <span style={{ fontWeight: 'bold' }}>Color:</span>Mint Green
        </div>
        <Button
          variant="dark"
          size="lg"
          className="add-btn"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </Button>
      </div>
      <Cart />
    </div>
  )
}

export default OrderDetail
