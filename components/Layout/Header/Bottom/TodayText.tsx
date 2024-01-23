/** TODO:
 *  - 문구를 DB에 저장하고 저장된 문구를 일정 시간에 맞추어 변경되도록, 혹은 랜덤으로 나오도록 구현 필요
 * 
 */

export default function TodayText() {
  return (
    <div className="ml-4 flex flex-col gap-y-px">
      <span className="text-sm font-semibold text-[#DB8888]">당신을 위한 한 마디</span>
      <span className="text-xs font-normal text-[#8C8C8C]">
        이걸 기억하겠다고 약속해줘. 넌 네가 믿는 것보다 더 용감하고, 보기보다 강하고, 네 생각보다 더 똑똑하다는 걸
      </span>
    </div>
  )
}
