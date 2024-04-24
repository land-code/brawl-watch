import { Client } from 'brawlstars'
import { redirect } from 'next/navigation'
import { z } from 'zod'

export async function getPlayer(formData: FormData) {
  'use server'
  let playerTag: string | null = null
  try {
    const rawTag = formData.get('player-tag') as string
    const tag = rawTag.toUpperCase().replace(/O/g, '0')

    const client = new Client(process.env.BRAWL_STARS_API_KEY!)
    const player = await client.getPlayer(tag)
    playerTag = player.tag.slice(1)
  } catch (error) {
    if (error instanceof z.ZodError) {
      // 400 Bad Request
      console.error(error.errors)
      return new Response('Bad Request', { status: 400 })
    }
    // 500 Internal Server Error
    console.error(error)
    return new Response('Internal Server Error', { status: 500 })
  }

  if (playerTag === null) {
    return new Response('Player not found', { status: 404 })
  }
  return redirect(`/player/${playerTag}`)
}
