import Product from './Product'
import { Container, Row, Col} from 'react-bootstrap'
import './index.css'

const OrderList = () => {
  const products = [
    { id: 1, name: 'Essnce Solid Drawstring Waist Thermal Lined Sweatpants', price: '$8.99', imgUrl: '01.webp' },
    { id: 1, name: 'Essnce Solid Drawstring Waist Thermal Lined Sweatpants', price: '$8.99', imgUrl: '02.webp' },
    { id: 1, name: 'Essnce Solid Drawstring Waist Thermal Lined Sweatpants', price: '$8.99', imgUrl: '03.webp' },
    { id: 1, name: 'Essnce Solid Drawstring Waist Thermal Lined Sweatpants', price: '$8.99', imgUrl: '04.webp' },
    { id: 1, name: 'Essnce Solid Drawstring Waist Thermal Lined Sweatpants', price: '$8.99', imgUrl: '01.webp' },
    { id: 1, name: 'Essnce Solid Drawstring Waist Thermal Lined Sweatpants', price: '$8.99', imgUrl: '01.webp' },
    { id: 1, name: 'Essnce Solid Drawstring Waist Thermal Lined Sweatpants', price: '$8.99', imgUrl: '01.webp' },
    { id: 1, name: 'Essnce Solid Drawstring Waist Thermal Lined Sweatpants', price: '$8.99', imgUrl: '01.webp' },
    { id: 1, name: 'Essnce Solid Drawstring Waist Thermal Lined Sweatpants', price: '$8.99', imgUrl: '01.webp' },
  ]

  return (
    <Container>
      <Row xs={1} md={4} className="custom-row">
        {products.map((card) => (
          <Col className='custom-col'>
            <Product item={card} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default OrderList
