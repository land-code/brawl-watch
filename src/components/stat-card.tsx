import Card from './ui/card'

interface IStatCardSkeletonProps {
  icon: React.ElementType
  label: string
}

interface IStatCardProps extends IStatCardSkeletonProps {
  value: string | number
}

export function StatCardSkeleton({
  icon: Icon,
  label
}: IStatCardSkeletonProps) {
  return (
    <Card as='p'>
      <Icon className='size-12' />{' '}
      <span className='pt-2 text-zinc-200'>{label}</span>{' '}
      <span className='animate-pulse rounded-xl h-6 w-full bg-zinc-500' />
    </Card>
  )
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
