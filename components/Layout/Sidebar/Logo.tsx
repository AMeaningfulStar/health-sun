import Link from 'next/link'

import LOGO_ICON from '@lottie/Logo.json'
import Lottie from 'react-lottie-player'

export default function Logo() {
  return (
    <div className="flex h-24 w-full items-center justify-center">
      <Link href={'/'} className="flex flex-row items-center gap-x-2">
        <Lottie loop animationData={LOGO_ICON} play className="aspect-square w-9" />
        <span className="pr-2 text-2xl text-[#DB8888]">Health sun</span>
      </Link>
    </div>
  )
}
