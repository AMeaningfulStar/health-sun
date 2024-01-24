import Link from 'next/link'

interface NotificationType {
  title: string
  info: string
  toURL: string
}

export default function Notification({ title, info, toURL }: NotificationType) {
  return (
    <div className="bordrer-[#F6F6F9] flex h-16 w-full items-center justify-between rounded-xl border-2 px-4 mb-2">
      <div className="flex flex-col">
        <span className="text-sm font-normal">{title}</span>
        <span className="text-xs font-light text-[#A7A7A7]">{info}</span>
      </div>
      <Link href={toURL} className="flex h-7 w-10 cursor-pointer items-center justify-center rounded bg-gray-400">
        <span className="text-white">보기</span>
      </Link>
    </div>
  )
}
