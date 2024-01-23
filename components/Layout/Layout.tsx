import Sidebar from './Sidebar/Sidebar'

interface LayoutType {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutType) {
  return (
    <div className="flex min-h-screen w-full flex-row px-4">
      <Sidebar />
      <div className="flex-grow py-4">
        <div className="h-full w-full rounded-2xl bg-white">
          <div className="h-36 w-full bg-slate-400">
            <div className='w-full h-1/2'></div>
            <div className='w-full h-0 border'></div>
            <div className='w-full h-1/2'></div>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
