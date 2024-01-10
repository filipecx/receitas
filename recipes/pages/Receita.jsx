import { useEffect, useState } from 'react'
import Axios from 'axios'
import  ListGroup  from 'react-bootstrap/ListGroup'
import { useParams } from 'react-router-dom'

const baseUrl = 'http://localhost:3000/pegaReceita'

export function Receita(){
    let {titulo} = useParams()
    
    const [nome, setNome] = useState('')
    const [ingredientes, setIngredientes] = useState([''])
    const [rendimento, setRendimento] = useState('')
    const [etapa, setEtapa] = useState([''])
    const [ref, setReft] = useState([''])
    const pegaReceita = async () => {
        try{
            const response = await Axios.get(baseUrl + `/${titulo}`)
            setNome(response.data[0].titulo)
            setIngredientes(response.data[0].ingredientes)
            setRendimento(response.data[0].rendimento)
            setEtapa(response.data[0].etapa)
            setReft(response.data[0].referencia)
        //    response.data[0].ingredientes.map((ingrediente) => {
        //        setIngredientes(ingredientes => [...ingredientes, ingrediente])
        //    })
            console.log(response.data[0])
        }catch(error){
            console.log(error)
        }
    }
    
    useEffect(() => {
        pegaReceita()
    }, [])
    return(
        <>
           
            <h1>{nome}</h1>
            <p>{rendimento}</p>
            <h3>Ingredientes: </h3>
            <ListGroup>
            {
                ingredientes.map((ingrediente) => {
                    {
                    return(
                        <ListGroup.Item
                        key={Math.floor(Math.random() * 1000)}>
                        {ingrediente}
                        </ListGroup.Item> 
                    )
                    }
                })
            }
            </ListGroup>
            <h3>Passos: </h3>
            <ListGroup>
            {
                etapa.map((etapa) => {
                    {
                        return(
                            <ListGroup.Item
                            key={Math.floor(Math.random() * 1000)}>
                                {etapa}    
                            </ListGroup.Item>
                        )
                    }
                })
            }
            </ListGroup>
            <h3>Referência: </h3>
            <ListGroup>
                {
                    ref.map((referencia) => {
                        return(
                            <ListGroup.Item
                            key={Math.floor(Math.random() * 1000)}>
                                {referencia}
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </>
    )
}