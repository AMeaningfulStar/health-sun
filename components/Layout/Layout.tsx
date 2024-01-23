import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

interface LayoutType {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutType) {
  return (
    <div className="flex min-h-screen w-full flex-row px-4">
      <Sidebar />
      <div className="flex-grow py-4">
        <div className="flex h-full w-full flex-col rounded-2xl bg-white">
          <Header />
          <div className="mx-auto w-full max-w-6xl flex-grow">{children}</div>
        </div>
      </div>
    </div>
  )
}
