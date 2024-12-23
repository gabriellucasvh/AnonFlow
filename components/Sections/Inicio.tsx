import React from 'react'
import { Button } from '../ui/button'

const Inicio = () => {
  return (
    <div className='flex items-center justify-center my-56 flex-col'>
        <div className='text-center w-1/2'>
            <h1 className='text-4xl font-bold'>Feedback Seguro, Resultados Reais</h1>
            <p className='mt-4 text-neutral-600'>Dê a todos a oportunidade de compartilhar ideias, opiniões e preocupações de forma totalmente anônima. Incentive a transparência e crie um ambiente de trabalho onde cada voz é ouvida e valorizada.</p>
        </div>
        <div className='flex items-center justify-center gap-3'>
            <Button variant="default" className='mt-4'>Comece agora</Button>
            <Button variant="outline" className='mt-4'>Saiba mais</Button>
        </div>
    </div>
  )
}

export default Inicio