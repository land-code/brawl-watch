import { IIconProps } from "./icons-props";

export default function ClockIcon (props: IIconProps) {
  return (
    <svg
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        d='M15.25 13.5h-4a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0V12h3.25a.75.75 0 0 1 0 1.5ZM12 2C6.478 2 2 6.478 2 12s4.478 10 10 10 10-4.478 10-10S17.522 2 12 2Z'
        fill='#ffffff'
      />
    </svg>
  )
}