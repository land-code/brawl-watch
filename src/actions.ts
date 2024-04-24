'use server'
import { APIError, Client } from 'brawlstars'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { TPlayerFinderStatus } from './components/player-finder-form'

export async function getPlayer(
  prevState: TPlayerFinderStatus,
  formData: FormData
): Promise<TPlayerFinderStatus> {
  let playerTag: string | null = null
  try {
    const rawTag = formData.get('player-tag') as string
    const tag = rawTag.toUpperCase().replace(/O/g, '0')

    const client = new Client(process.env.BRAWL_STARS_API_KEY!)
    const player = await client.getPlayer(tag)
    playerTag = player.tag.slice(1)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        status: 'error',
        error: 'El formato de la etiqueta de jugador es incorrecto'
      }
    }
    if (error instanceof APIError && error.status === 404) {
      return { status: 'error', error: 'Jugador no encontrado' }
    }
    return { status: 'error', error: 'Error desconocido' }
  }

  console.log('playerTag', playerTag)
  return redirect(`/player/${playerTag}`)
}
