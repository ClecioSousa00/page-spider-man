import { Background } from '@/components/Background'
import { Header } from '@/components/Header'
import { SpiderBar } from '@/components/SpiderBar'
import Image from 'next/image'

import LogoSpiderMan from '../assets/images/Spider-Man-logo.png'
import LogoSony from '../assets/images/sony.svg'

import { cardDescription } from '@/cardDescription'
import { Card } from '@/components/Card'

export default function Home() {
  const showCards = () => {
    return cardDescription.map((card, index) => (
      <Card
        key={index}
        srcImage={card.srcImage}
        namePerson={card.namePerson}
        nameAuthor={card.nameAuthor}
      />
    ))
  }

  return (
    <>
      <Background />
      <Header />
      <main className=" px-8 pt-8">
        <section className="flex items-center">
          <SpiderBar />
          <div className="flex flex-1 justify-center">
            <Image
              src={LogoSpiderMan}
              width={300}
              alt="Logo do filme Spider-Man"
            />
          </div>
        </section>
        <section className="flex items-center justify-between">
          <Image src={LogoSony} alt="Logo da Sony Pictures" />
          {showCards()}
        </section>
      </main>
    </>
  )
}
