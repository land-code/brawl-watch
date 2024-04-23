import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex-warp flex items-center gap-4 md:gap-8'>
      <span className='text-4xl'>Brawl watch</span>
      <nav className='flex flex-wrap items-center gap-4 text-2xl text-zinc-300'>
        <Link href='/' className='hover:text-zinc-50'>Inicio</Link>
      </nav>
    </header>
  )
}
