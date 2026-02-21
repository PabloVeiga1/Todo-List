import React from 'react'
import { useState } from 'react'
import Tarefa from '../compontents/Tarefa'

export default function App() {
  const [tarefas, setTarefas] = useState([])
  const [texto, setTexto] = useState('')
  const [dark, setDark] = useState(false)

  function adicionar() {``
    if (!texto.trim()) return
    setTarefas([...tarefas, texto])
    setTexto('')
  }

  function deletarTarefa(texto) {
    setTarefas(tarefas.filter(el => el !== texto))
  }

  function concluirTarefa(texto) {
    setTarefas(tarefas.map(el => el === texto ? `${el} (concluída)` : el))
  }

  function desconcluirTarefa(texto) {
    setTarefas(tarefas.map(el => el === texto ? el.replace(' (concluída)', '') : el))
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') adicionar()
  }

  const pendentes = tarefas.filter(t => !t.includes('(concluída)')).length

  return (
    <div className={`min-h-screen px-4 py-10 sm:py-16 transition-colors duration-300 ${dark ? 'bg-stone-950' : 'bg-stone-50'}`}>
      <div className="w-full max-w-xl mx-auto">

        {/* Header */}
        <div className={`mb-10 border-b pb-6 flex items-start justify-between transition-colors duration-300 ${dark ? 'border-stone-800' : 'border-stone-200'}`}>
          <div>
            <h1 className={`text-5xl sm:text-6xl font-black tracking-tight leading-none transition-colors duration-300 ${dark ? 'text-stone-100' : 'text-stone-900'}`}>
              Tarefas
            </h1>
            <p className={`text-base mt-2 transition-colors duration-300 ${dark ? 'text-stone-500' : 'text-stone-400'}`}>
              {pendentes > 0
                ? `${pendentes} pendente${pendentes > 1 ? 's' : ''}`
                : tarefas.length > 0 ? 'Tudo concluído!' : 'Nenhuma tarefa ainda'}
            </p>
          </div>

          {/* Toggle dark/light */}
          <button
            onClick={() => setDark(!dark)}
            title={dark ? 'Modo claro' : 'Modo escuro'}
            className={`
              w-11 h-11 rounded-2xl flex items-center justify-center mt-1
              transition-all duration-300
              ${dark
                ? 'bg-stone-800 hover:bg-stone-700 text-stone-300'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-500'}
            `}
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Input area */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <input
            placeholder="O que precisa ser feito?"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`
              flex-1 border rounded-2xl px-5 py-4 text-lg
              focus:outline-none focus:ring-2 transition-all duration-300 shadow-sm
              ${dark
                ? 'bg-stone-900 border-stone-700 text-stone-100 placeholder-stone-600 focus:border-stone-500 focus:ring-stone-800'
                : 'bg-white border-stone-200 text-stone-800 placeholder-stone-300 focus:border-stone-400 focus:ring-stone-200'}
            `}
          />
          <button
            onClick={adicionar}
            disabled={!texto.trim()}
            className={`
              font-semibold text-lg px-7 py-4 rounded-2xl
              transition-all duration-200 active:scale-95 shadow-sm sm:whitespace-nowrap
              ${dark
                ? 'bg-stone-100 hover:bg-white text-stone-900 disabled:bg-stone-800 disabled:text-stone-600'
                : 'bg-stone-900 hover:bg-stone-700 text-white disabled:bg-stone-200 disabled:text-stone-400'}
              disabled:cursor-not-allowed
            `}
          >
            Adicionar
          </button>
        </div>

        {/* Task list */}
        {tarefas.length > 0 && (
          <ul className="space-y-3">
            {tarefas.map((el, index) => (
              <Tarefa
                key={index}
                texto={el}
                deletarTarefa={deletarTarefa}
                concluirTarefa={concluirTarefa}
                desconcluirTarefa={desconcluirTarefa}
                dark={dark}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}