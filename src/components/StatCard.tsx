import Card from './ui/card'

interface IStatCardProps {
  icon: React.ElementType
  label: string
  value: string | number
}

export default function StatCard({ icon: Icon, label, value }: IStatCardProps) {
  return (
    <Card as='p'>
      <Icon className='size-12' />{' '}
      <span className='pt-2 text-zinc-200'>{label}</span>{' '}
      <span className='text-xl'>{value}</span>
    </Card>
  )
}
