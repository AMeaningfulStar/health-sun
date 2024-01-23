import MyProfile from './MyProfile'
import TodayText from './TodayText'

export default function HeaderBottom() {
  return (
    <div className="flex h-1/2 w-full items-center justify-between">
      <TodayText />
      <MyProfile />
    </div>
  )
}
