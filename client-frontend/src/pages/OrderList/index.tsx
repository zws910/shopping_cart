import { useState, useEffect, useRef } from 'react'
import Product from './Product'
import { Container, Row, Col } from 'react-bootstrap'
import Cart from '@/components/Cart'
import { getRandomNumber, getRandomDecimal } from '@/utils/utils'
import { useDebounceFn } from 'ahooks'
import './index.css'

type Product = {
  id: number
  name: string
  price: string
  imgUrl: string
}

const OrderList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [mockData, setMockData] = useState<Product[]>([])

  const containerRef = useRef<HTMLDivElement>(null)

  const ITEM_PER_PAGE = 8
  const generateMockData = () => {
    const _mockData = []

    for (let i = 1; i < 2400; i++) {
      _mockData.push({
        id: i,
        name: `Essnce Solid Drawstring Waist Thermal (ProductID: ${i})`,
        price: `$${getRandomDecimal(5.99, 18.99)}`,
        imgUrl: `${getRandomNumber(1, 8)}.webp`,
      })
    }
    setMockData(_mockData)
  }

  const mockFetch = (pageNum: number) => {
    return mockData.slice(0, pageNum*ITEM_PER_PAGE)
  }

  const fetchNextPage = () => {
    setLoading(true)
    console.log(currentPage, mockData)
    setTimeout(() => {
      const data = mockFetch(currentPage)
      setProducts(data)
      setCurrentPage(currentPage + 1)
      setLoading(false)
    }, 2000)
  }

  const { run: loadMore } = useDebounceFn(
    () => {
      const elem = containerRef.current
      if (!elem) return
      const domRect = elem.getBoundingClientRect()
      if (!domRect) return
      const { bottom } = domRect
      if (bottom <= document.body.clientHeight) {
        fetchNextPage()
      }
    },
    {
      wait: 300,
    }
  )

  useEffect(() => {
    window.addEventListener('scroll', loadMore)

    return () => {
      window.removeEventListener('scroll', loadMore)
    }
  }, [])
  // init page
  useEffect(() => {
    generateMockData()
    
  }, [])

  useEffect(() => {
    fetchNextPage()
  }, [mockData])

  return (
    <Container>
      <div>
        <Row xs={1} md={4} className="custom-row">
          {products.map((card) => (
            <Col className="custom-col" key={card.id}>
              <Product item={card} />
            </Col>
          ))}
        </Row>
      </div>
      <div ref={containerRef}>{loading ? 'loading...' : 'load more'}</div>
      <Cart></Cart>
    </Container>
  )
}

export default OrderList
