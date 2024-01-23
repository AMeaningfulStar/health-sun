import Image from 'next/image'
import Link from 'next/link'

import RightIcon from '@img/Right_Icon.svg'

export default function MyProfile() {
  const RIGHT_ICON = { src: RightIcon, width: 17.1, height: 17.1 }

  return (
    <Link href={'/'} className="relative mr-6 flex h-12 w-28 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 active:bg-gray-300">
      <div className="flex flex-row gap-x-2">
        <span className="ml-1 text-sm text-[#DB8888]">나의 프로필</span>
        <Image alt="Arrow_Icon: Down" src={RIGHT_ICON.src} width={RIGHT_ICON.width} height={RIGHT_ICON.height} />
      </div>
    </Link>
  )
}
