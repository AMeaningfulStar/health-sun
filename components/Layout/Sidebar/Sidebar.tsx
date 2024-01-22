import Logo from './Logo'

export default function Sidebar() {
  return (
    <div className="mr-4 h-screen w-64 py-4">
      <div className="flex h-full w-full flex-col rounded-2xl bg-white">
        <Logo />
      </div>
    </div>
  )
}
