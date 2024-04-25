import { IUIComponentProps } from '@/types/generic-elements-props'

export default function Card<T extends React.ElementType = 'button'>({
  as,
  ...props
}: IUIComponentProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof IUIComponentProps<T>>) {
  const Tag = as || 'div'
  return (
    <Tag
      className='flex w-max flex-col items-center rounded-xl border-2 border-zinc-400 p-4'
      {...props}
    />
  )
}
