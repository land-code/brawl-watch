import { IIconProps } from "./icons-props";

export function RewardIcon(props: IIconProps) {
  return (
    <svg
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        d='M20.25 2c.966 0 1.75.783 1.75 1.75v3.042a2.75 2.75 0 0 1-1.477 2.438l-6.3 3.29A5 5 0 0 1 12 22a5 5 0 0 1-2.223-9.48l-6.3-3.29A2.75 2.75 0 0 1 2 6.792V3.75C2 2.783 2.784 2 3.75 2h16.5ZM12 13.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm4-10H7.997v6.398l3.887 2.03a.25.25 0 0 0 .232 0L16 9.898V3.5Z'
        fill='#ffffff'
      />
    </svg>
  )
}
