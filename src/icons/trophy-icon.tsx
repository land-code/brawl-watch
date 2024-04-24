import { IIconProps } from './icons-props'

export function TrophyIcon(props: IIconProps) {
  return (
    <svg
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        d='M15.253 2a2.25 2.25 0 0 1 2.236 2h1.268A1.75 1.75 0 0 1 20.5 5.606l.006.144v3a3.25 3.25 0 0 1-3.066 3.245l-.21.006a5.758 5.758 0 0 1-4.731 3.95V17.5h1.753a3.25 3.25 0 0 1 3.244 3.066l.006.184v.5a.75.75 0 0 1-.649.743l-.101.007H6.75a.75.75 0 0 1-.744-.648L6 21.25v-.5a3.25 3.25 0 0 1 3.065-3.245l.185-.005H11v-1.549a5.758 5.758 0 0 1-4.729-3.95L6.245 12a3.25 3.25 0 0 1-3.25-3.25v-3c0-.966.784-1.75 1.75-1.75h1.268A2.25 2.25 0 0 1 8.25 2h7.003Zm3.504 3.5h-1.254v4.983A1.75 1.75 0 0 0 19 8.904l.007-.154v-3a.25.25 0 0 0-.193-.243l-.057-.007ZM6 5.5H4.745a.25.25 0 0 0-.25.25v3A1.75 1.75 0 0 0 6 10.483V5.5Z'
        fill='#ffffff'
      />
    </svg>
  )
}
