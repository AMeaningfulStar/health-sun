import Layout from '@components/Layout/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="flex h-full w-full">
        <div className="mr-4 flex h-full w-2/3 flex-col">
          <div className="mb-4 h-96 w-full rounded-xl bg-[#F6F6F9]"></div>
          <div className="h-60 w-full rounded-xl bg-[#F6F6F9]"></div>
        </div>
        <div className="flex h-full w-1/3 flex-col">
          <div className="mb-4 h-80 w-full rounded-xl bg-[#F6F6F9]"></div>
          <div className="h-[19rem] w-full rounded-xl bg-[#F6F6F9]"></div>
        </div>
      </div>
    </Layout>
  )
}
