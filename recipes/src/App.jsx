import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from '../pages/Home'
import { AdicionarReceita } from '../pages/AdicionarReceita'
import { Receita } from '../pages/Receita'
import { Teste } from '../pages/Teste'
import { Col, Container, Row } from 'react-bootstrap'
import { Nave } from '../components/Nave'

function App() {

  return (
    <Container >
      <Row>
        
        <Col>
          <Nave />
          <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/adicionarreceita' element={<AdicionarReceita />}/>
          <Route path='/teste' element={<Teste />} />
          <Route path='/pegaReceita/:titulo' element={<Receita />}/>
          </Routes>
        </Col>
        
      </Row>
      
    </Container>
  )
}

export default App
