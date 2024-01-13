import { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import Axios from 'axios'
import {Titulo} from '../components/Titulo'
const baseUrl = 'https://receitas-five.vercel.app/'

export function Home(){
    const [receitas, setReceita] = useState([])

    const pegaReceitas = async () => {
        try{
            const response = await Axios.get(baseUrl)
            setReceita(response.data)
            console.log(receitas)
        
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        pegaReceitas()
    }, [])
    
    return(
        <>
            {
                receitas.map((receita) => {
                    return(
                        
                        <h1 key={receita._id}>
                            <Link to={`/pegaReceita/${receita.titulo}`}>
                                <Titulo titulo={receita.titulo}/>   
                            </Link>
                        </h1>
                        
                    )
                })
            }
        </>
    )
    
}