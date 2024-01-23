import ProfileImage from "./ProfileImage"
import ScreenMode from "./ScreenMode"

export default function HeaderTop() {
  return (
    <div className="flex h-1/2 w-full items-center justify-end gap-x-6">
      <ScreenMode />
      <ProfileImage />
    </div>
  )
}
