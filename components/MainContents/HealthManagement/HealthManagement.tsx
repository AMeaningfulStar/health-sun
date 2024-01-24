import ContentBox from '../Layout/ContentBox'
import Title from '../Layout/Element/Title'
import Notification from './Notification'

/** TODO:
 *  - 퍼블리싱을 위한 임시 작업을 한 코드 지우고 데이터 넣어야함
 * 
 */

export default function HealthManagement() {
  return (
    <div className="h-96 w-full">
      <ContentBox>
        <Title title="나의 건강 관리" />
        <div className="h-full w-full overflow-y-scroll">
          <Notification title='나의 건강 검진' info='다음 건강검진까지 26일 남았습니다.' toURL='/' />
        </div>
      </ContentBox>
    </div>
  )
}
