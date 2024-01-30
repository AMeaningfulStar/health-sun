import Image from 'next/image'
import ContentBox from '../Layout/ContentBox'
import Title from '../Layout/Element/Title'

import ARROW_LEFT from '@img/Arrow_Left.svg'
import ARROW_RIGHT from '@img/Arrow_Right.svg'
import VACCINATION from '@img/Vaccination.jpg'

export default function VaccinationRecommendation() {
  const ARROW_RIGHT_ICON = { src: ARROW_RIGHT, width: 42, height: 42 }
  const ARROW_LEFT_ICON = { src: ARROW_LEFT, width: 42, height: 42 }

  return (
    <div className="h-60 w-full">
      <ContentBox>
        <Title title="예방 접종 추천" />
        <div className="flex h-full w-full items-center justify-between">
          <Image
            alt="Arrow_Icon: Left"
            src={ARROW_LEFT_ICON.src}
            width={ARROW_LEFT_ICON.width}
            height={ARROW_LEFT_ICON.height}
          />
          <div className="flex h-full w-full items-center justify-center">
            <div className="overflow-hidden rounded-lg">
              <Image src={VACCINATION} style={{ width: 10000, height: 'auto' }} alt="..." />
            </div>
          </div>
          <Image
            alt="Arrow_Icon: Right"
            src={ARROW_RIGHT_ICON.src}
            width={ARROW_RIGHT_ICON.width}
            height={ARROW_RIGHT_ICON.height}
          />
        </div>
      </ContentBox>
    </div>
  )
}
