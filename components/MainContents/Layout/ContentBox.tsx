interface ContentBoxType {
  children: React.ReactNode
}

export default function ContentBox({ children }: ContentBoxType) {
  return <div className="flex h-full w-full flex-col rounded-xl bg-[#F6F6F9] p-4">{children}</div>
}
