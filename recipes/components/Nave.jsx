import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export function Nave(){
    return(
        <Navbar className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand href='/'>Minhas receitas</Navbar.Brand>
                <Nav>
                    <Nav.Link href='/adicionarreceita/'>Adicionar Receita</Nav.Link>
                    <Nav.Link href='/teste/'>TESTE</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}