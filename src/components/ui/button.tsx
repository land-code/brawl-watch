interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...props }: IButtonProps) {
  return (
    <button
      className='rounded-full bg-zinc-200 p-2 text-xl text-zinc-950 transition-colors duration-200 ease-in-out hover:bg-zinc-400 disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-500'
      {...props}
    >
      Encontrar jugador
    </button>
  )
}
