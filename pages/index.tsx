import Layout from '@components/Layout/Layout'
import HealthCalendar from '@components/MainContents/HealthCalendar/HealthCalendar'
import HealthManagement from '@components/MainContents/HealthManagement/HealthManagement'
import MedInfo from '@components/MainContents/MedInfo/MedInfo'
import VaccinationRecommendation from '@components/MainContents/VaccinationRecommendation/VaccinationRecommendation'

export default function Home() {
  return (
    <Layout>
      <div className="flex h-full w-full">
        <div className="mr-4 flex h-full w-2/3 flex-col gap-y-4">
          <HealthManagement />
          <VaccinationRecommendation />
        </div>
        <div className="flex h-full w-1/3 flex-col gap-y-4">
          <HealthCalendar />
          <MedInfo />
        </div>
      </div>
    </Layout>
  )
}
