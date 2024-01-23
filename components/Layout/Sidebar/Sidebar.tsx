import Logo from './Logo'
import Logout from './Logout'
import Navgations from './Navgations/Navgations'

export default function Sidebar() {
  return (
    <div className="mr-4 h-screen w-64 py-4">
      <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-white">
        <Logo />
        <Navgations />
        <Logout />
      </div>
    </div>
  )
}
