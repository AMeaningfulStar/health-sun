import Image from 'next/image'
import Link from 'next/link'

import ARROW_ICON from '@img/Arrow_Right.svg'

interface NavType {
  children: React.ReactNode
  title: string
  menuUrl: string
}

export default function Nav({ children, title, menuUrl }: NavType) {
  return (
    <Link
      href={menuUrl}
      className="group mb-4 flex h-14 w-60 items-center justify-between rounded-r-full p-2 hover:bg-[#F6F6F9] active:bg-[#CACAD0]"
    >
      <div className="flex items-center gap-x-4 ml-4">
        {children}
        <span className="text-lg text-[#A7A7A7] group-hover:text-[#DB8888]">{title}</span>
      </div>
      <div className="hidden h-10 w-10 rounded-full bg-white group-hover:block">
        <div className="flex h-full w-full items-center justify-center">
          <Image alt="Arrow_Icon:Right" src={ARROW_ICON} />
        </div>
      </div>
    </Link>
  )
}
