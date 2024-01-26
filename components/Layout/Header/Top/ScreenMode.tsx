import { useTheme } from 'next-themes'
import Image from 'next/image'

import darkModeIcon from '@img/darkMode.svg'
import lightModeIcon from '@img/lightMode.svg'

export default function ScreenMode() {
  const { setTheme } = useTheme()

  const LIGHTMODE_ICON = { src: lightModeIcon, width: 26, height: 26 }
  const DARKMODE_ICON = { src: darkModeIcon, width: 24, height: 24 }

  return (
    <div className="h-14 w-24 rounded-xl bg-gray-200 p-2">
      <div className="flex h-full w-full rounded-lg bg-slate-400">
        <div
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-white dark:bg-transparent"
          onClick={() => setTheme('light')}
        >
          <Image
            alt="Screen_Mode:Light"
            src={LIGHTMODE_ICON.src}
            width={LIGHTMODE_ICON.width}
            height={LIGHTMODE_ICON.height}
          />
        </div>
        <div
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-transparent dark:bg-white"
          onClick={() => setTheme('dark')}
        >
          <Image
            alt="Screen_Mode:Dark"
            src={DARKMODE_ICON.src}
            width={DARKMODE_ICON.width}
            height={DARKMODE_ICON.height}
          />
        </div>
      </div>
    </div>
  )
}
