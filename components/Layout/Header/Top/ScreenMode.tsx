import { useTheme } from 'next-themes'
import Image from 'next/image'

import { getLogger } from '@libs/logger'
import { ThemeEnum } from '@libs/theme'

import darkModeIcon from '@img/darkMode.svg'
import lightModeIcon from '@img/lightMode.svg'

/** FIXME:
 *  - 첫 랜더링 시, 라이브 모드의 백 그라운드가 화이트가 되지 않는 오류 수정
 * 
 */

export default function ScreenMode() {
  const ModeButton = ({ theme }: { theme: ThemeEnum }) => {
    const { theme: globalTheme, setTheme } = useTheme()

    const LIGHTMODE_ICON = { src: lightModeIcon, width: 26, height: 26 }
    const DARKMODE_ICON = { src: darkModeIcon, width: 24, height: 24 }

    const getImageInfo = (theme: ThemeEnum) => {
      const logger = getLogger()
      switch (theme) {
        case ThemeEnum.Light: {
          return LIGHTMODE_ICON
        }
        case ThemeEnum.Dark: {
          return DARKMODE_ICON
        }
        default: {
          logger.error('getImageInfo', `theme is not in [${Object.keys(ThemeEnum)}`, theme)
          return LIGHTMODE_ICON
        }
      }
    }

    const imageInfo = getImageInfo(theme)
    const isSelected = theme === globalTheme

    return (
      <div
        className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg ${isSelected ? 'bg-white' : ''}`}
        onClick={() => setTheme(theme)}
      >
        <Image alt="Screen_Mode:Light" src={imageInfo.src} width={imageInfo.width} height={imageInfo.height} />
      </div>
    )
  }

  return (
    <div className="h-14 w-24 rounded-xl bg-gray-200 p-2">
      <div className="flex h-full w-full rounded-lg bg-slate-400">
        <ModeButton theme={ThemeEnum.Light} />
        <ModeButton theme={ThemeEnum.Dark} />
      </div>
    </div>
  )
}
