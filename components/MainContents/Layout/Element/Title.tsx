interface TitleType {
  title: string
}

export default function Title({ title }: TitleType) {
  return (
    <div className="flex h-6 items-center mb-2">
      <span className="text-base">{title}</span>
    </div>
  )
}
