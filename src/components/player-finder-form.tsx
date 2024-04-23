// import { getPlayer } from '@/actions'
import { redirect } from 'next/navigation'
import SubmitButton from './ui/submit-button'
import { getPlayer } from '@/actions'

export default function PlayerFinderForm() {
  return (
    <form
      className='flex max-w-xl flex-col items-center gap-4'
      action={getPlayer}
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
      <SubmitButton>Encontrar jugador</SubmitButton>
    </form>
  )
}
