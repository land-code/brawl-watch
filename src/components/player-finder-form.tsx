'use client'

import { useFormState } from 'react-dom'
import SubmitButton from './ui/submit-button'
import { getPlayer } from '@/actions'

export type TPlayerFinderStatus =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success' }
  | { status: 'error'; error: string }

export default function PlayerFinderForm() {
  const [state, formAction] = useFormState(getPlayer, { status: 'idle' })
  return (
    <form
      className='flex max-w-xl flex-col items-center gap-4'
      action={formAction}
    >
      <label className='flex items-center gap-4 text-xl'>
        Etiqueta de jugador
        <input
          name='player-tag'
          required
          placeholder='GROJGQOP'
          className='rounded-lg bg-zinc-400 p-2 text-zinc-950 placeholder:text-zinc-700'
        />
      </label>
      <p aria-live='polite' className='rounded-xl text-lg text-red-200'>
        {state.status === 'error' && state.error}
      </p>
      <SubmitButton>Encontrar jugador</SubmitButton>
    </form>
  )
}
