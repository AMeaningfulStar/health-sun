import Layout from "@components/Layout/Layout"
import Image from 'next/image'

import Layout from '@components/Layout/Layout'

import ARROW_LEFT from '@img/Arrow_Left.svg'
import ARROW_RIGHT from '@img/Arrow_Right.svg'

export default function Vaccination() {
  const ARROW_RIGHT_ICON = { src: ARROW_RIGHT, width: 52, height: 52 }
  const ARROW_LEFT_ICON = { src: ARROW_LEFT, width: 52, height: 52 }

  return (
    <Layout>
      <div className="flex h-full w-full flex-col p-4">
        <div className="mb-4 w-full">
          <span className=" text-2xl font-semibold text-gray-500">예방 접종 추천</span>
        </div>
        <div className="flex flex-row items-center  justify-between gap-x-4">
          <Image
            alt="Arrow_Icon: Left"
            src={ARROW_LEFT_ICON.src}
            width={ARROW_LEFT_ICON.width}
            height={ARROW_LEFT_ICON.height}
          />
          <Image
            alt="Arrow_Icon: Right"
            src={ARROW_RIGHT_ICON.src}
            width={ARROW_RIGHT_ICON.width}
            height={ARROW_RIGHT_ICON.height}
          />
        </div>
      </div>
    </Layout>
  )
}