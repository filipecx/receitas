import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Axios from 'axios'
import { Ingredients } from '../components/Ingredients'
import { Etapa } from '../components/Etapa'
import { Referencia } from '../components/Referencia'
import { useNavigate } from 'react-router-dom'

const baseUrl = 'https://receitasback.vercel.app/'

export function AdicionarReceita(){
    const [titulo, setTitulo] = useState('')
    const [ingrediente, setIngrediente] = useState('')
    const [ingredientes, setIngredientes] = useState([])
    const [rendimento, setRendimento] = useState()
    const [etapa, setEtapa] = useState('')
    const [etapas, setEtapas] = useState([])
    const [referencia, setReferencia] = useState('')
    const [referencias, setReferencias] = useState([])
    const navigate = useNavigate()

    const adicionar = async () => {
        try{
            await Axios.post(baseUrl + 'adicionarReceita', {
                titulo: titulo,
                ingredientes: ingredientes,
                etapas: etapas,
                rendimento: rendimento,
                referencia: referencias
            })
            navigate("/")
        }catch(error){
            console.log(error)
        }
    }
    const addIngredient = () => {
        setIngredientes(ingredientes => [...ingredientes, ingrediente])
        setIngrediente('')
    }
    const addEtapa = () => {
        setEtapas(etapas => [...etapas, etapa])
        console.log(etapas)
        setEtapa('')
    }
    const addRef = () => {
        setReferencias(referencias => [...referencias, referencia])
        setReferencia('')
    }
    
    return(
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type='text' placeholder='Titulo da receita'
                    onChange={(e) => setTitulo(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rendimento</Form.Label>
                    <Form.Control type='text' placeholder='Rendimento'
                    onChange={(e) => setRendimento(e.target.value)} />
                </Form.Group>
                {
                    ingredientes.map((ingrediente) => {
                        return(
                            <Ingredients 
                            key={Math.floor(Math.random() * 1000)}
                            ingrediente={ingrediente}
                            />
                        )
                    })
                }
                <Form.Group>
                    <Form.Label>Ingrediente</Form.Label>
                    <Form.Control type='text' placeholder='Ingrediente'
                    onChange={(e) => setIngrediente(e.target.value)}
                    value={ingrediente}
                    ></Form.Control>
                    <Button variant='dark' onClick={addIngredient}>
                    +
                    </Button>
                </Form.Group>
                {
                    etapas.map((etapa) => {
                        return(
                            <Etapa 
                            key={Math.floor(Math.random() * 1000)}
                            etapa={etapa}
                            />
                        )
                    })
                }
                <Form.Group>
                    <Form.Label>Descreva uma etapa</Form.Label>
                    <Form.Control as='textarea' rows={3} placeholder='Descreva um passo'
                    onChange={(e) => setEtapa(e.target.value)} 
                    value={etapa} />
                    <Button variant='dark' onClick={addEtapa}>
                    +
                    </Button>
                </Form.Group>
                {
                    referencias.map((referencia) => {
                        return(
                            <Referencia 
                            key={Math.floor(Math.random() * 1000)}
                            referencia={referencia}
                            />
                        )
                    })
                }  
                <Form.Group>
                    <Form.Label>Insira referências</Form.Label>
                    <Form.Control as='textarea' rows={3} placeholder='Insira referências'
                    onChange={(e) => setReferencia(e.target.value)} 
                    value={referencia} />
                    <Button variant='dark' onClick={addRef}>
                    +
                    </Button>
                </Form.Group>  
                <Button variant='dark' onClick={adicionar}>
                    Adicionar receita
                </Button>
            </Form>
        </>
    )
}