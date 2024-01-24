import ContentBox from '../Layout/ContentBox'
import Title from '../Layout/Element/Title'
import Notification from './Notification'



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
