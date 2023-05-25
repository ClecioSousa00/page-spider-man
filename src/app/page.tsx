import { Background } from '@/components/Background'
import { Header } from '@/components/Header'
import { SpiderBar } from '@/components/SpiderBar'

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <main>
        <SpiderBar />
      </main>
    </>
  )
}
