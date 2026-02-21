import React from 'react'
import {useState} from 'react'

export default function App() {
  const [tarefas,setTarefas] = useState([])
  const [texto,setTexto] = useState('')
  function adicionar(){
    setTarefas([...tarefas,texto])
    setTexto('')
  }

  return (
    <>
      <label>Tarefa</label>
      <input 

      placeholder='tarefa'
      value = {texto}
      onChange = {(e)=> setTexto(e.target.value)}

      ></input>
      <button 
      onClick={()=> adicionar()}
      >Enviar</button>

      <ul>
        {tarefas.map((el,index)=>{
          return <li key={index}>{el}</li>
        })}
      </ul>
    </>
  )
}
