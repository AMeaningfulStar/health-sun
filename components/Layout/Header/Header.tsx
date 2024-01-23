import HeaderBottom from './Bottom/HeaderBottom'
import HeaderTop from './Top/HeaderTop'

export default function Header() {
  return (
    <div className="h-36 w-full">
      <HeaderTop />
      <div className="h-0 w-full border"></div>
      <HeaderBottom />
    </div>
  )
}
