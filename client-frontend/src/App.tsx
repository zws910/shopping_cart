import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import OrderList from './pages/OrderList';
// import OrderDetail from './components/OrderDetail';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<OrderList />} />
          {/* <Route path="/order/:id" component={OrderDetail} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
