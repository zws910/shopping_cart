import { getAssestsFile } from '@/utils/utils'
import { Button, ButtonGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { add, reduce } from '@/store/cartSlice'
import './index.css'

interface CartProductProps {
  item: {
    id: number
    name: string
    price: string
    imgUrl: string
    count?: number
  }
}

const CartProduct: React.FC<CartProductProps> = (props) => {
  const { item } = props
  const dispatch = useDispatch()

  return (
    <div className="cart-product">
      <img width={60} height={85} src={getAssestsFile(item.imgUrl)} alt="" />
      <div className="item-desc">
        <div className="desc-left">
          <div className="item-name">{item.name}</div>
          <div className="item-quantity">Quantity: {item.count}</div>
        </div>
        <div className="desc-right">
          <div className="unit-price">{item.price}</div>
          <ButtonGroup size="sm">
            <Button variant="dark" onClick={() => dispatch(reduce(item))}>
              -
            </Button>
            <Button variant="dark" onClick={() => dispatch(add(item))}>
              +
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
