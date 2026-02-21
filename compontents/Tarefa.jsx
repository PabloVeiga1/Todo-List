import React from 'react'

function Tarefa({ texto, deletarTarefa, concluirTarefa, desconcluirTarefa, dark }) {
  const concluida = texto.includes('(concluída)')
  const textoLimpo = texto.replace(' (concluída)', '')

  return (
    <li className={`
      flex items-center justify-between gap-4
      border rounded-2xl px-5 py-4 shadow-sm
      transition-all duration-300
      ${dark
        ? concluida
          ? 'bg-stone-900 border-stone-800 opacity-50'
          : 'bg-stone-900 border-stone-700 hover:border-stone-500'
        : concluida
          ? 'bg-white border-stone-100 opacity-60'
          : 'bg-white border-stone-200 hover:border-stone-300 hover:shadow-md'
      }
    `}>

      {/* Checkbox + texto */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <button
          onClick={() => concluida ? desconcluirTarefa(texto) : concluirTarefa(texto)}
          title={concluida ? 'Desmarcar' : 'Concluir'}
          className={`
            w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center
            transition-all duration-200
            ${concluida
              ? 'bg-yellow-400 border-yellow-400 hover:bg-yellow-300 hover:border-yellow-300'
              : dark
                ? 'border-stone-600 hover:border-yellow-400'
                : 'border-stone-300 hover:border-yellow-400'
            }
          `}
        >
          {concluida && (
            <svg className="w-3 h-3 text-yellow-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>

        <span className={`
          text-lg leading-snug break-words min-w-0 transition-all duration-300
          ${concluida
            ? 'line-through ' + (dark ? 'text-stone-600' : 'text-stone-400')
            : dark ? 'text-stone-100' : 'text-stone-800'
          }
        `}>
          {textoLimpo}
        </span>
      </div>

      {/* Deletar */}
      <button
        onClick={() => deletarTarefa(texto)}
        title="Deletar"
        className={`
          flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center
          transition-all duration-200
          ${dark
            ? 'text-stone-700 hover:text-red-400 hover:bg-red-400/10'
            : 'text-stone-300 hover:text-red-400 hover:bg-red-50'}
        `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>
        </svg>
      </button>
    </li>
  )
}

export default Tarefa