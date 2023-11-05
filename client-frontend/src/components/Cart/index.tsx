import { Button, Offcanvas } from 'react-bootstrap'
import './index.css'
import {  useMemo } from 'react'
import type { RootState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { showCart, hideCart } from '@/store/cartSlice'
import { getAssestsFile, convertUSDToNumber } from '@/utils/utils'
import CartProduct from '@/components/CartProduct'

const Cart = () => {
  const dispatch = useDispatch()
  const isCartShow = useSelector((state: RootState) => state.cart.isCartShow)
  const cartList = useSelector((state: RootState) => state.cart.cartList)

  const calculateSubtotal = useMemo(() => {
    const subtotal = cartList.reduce(
      (sum, product) => sum + product.count * convertUSDToNumber(product.price),
      0
    )
    return '$' + subtotal.toFixed(2)
  }, [cartList])

  return (
    <>
      <Button
        variant="dark"
        className="cart-btn"
        onClick={() => dispatch(showCart())}
      >
        <img src={getAssestsFile('cartIcon.png')} className="cart-icon" />
      </Button>
      <Offcanvas
        show={isCartShow}
        placement="end"
        onHide={() => dispatch(hideCart())}
        className="drawer-container"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="drawer-body">
          {cartList?.length > 0 ? (
            cartList?.map((product) => <CartProduct item={product} key={product.id} />)
          ) : (
            <div className="empty-cart">Add some products in the cart</div>
          )}

          <div className="subtotal">SUBTOTAL: {calculateSubtotal}</div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Cart
