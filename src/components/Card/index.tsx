import Image, { StaticImageData } from 'next/image'

interface CardPorps {
  srcImage: StaticImageData
  namePerson: string
  nameAuthor: string
}

export const Card = ({ srcImage, namePerson, nameAuthor }: CardPorps) => {
  return (
    <div className=" w-[124px] border-4 border-blue-500">
      <div>
        <Image className="w-full " src={srcImage} alt={namePerson} />
      </div>
      <div className="border-2 border-black bg-yellow-500 py-1 text-center text-sm leading-none text-black ">
        <p>{namePerson}</p>
        <p>{nameAuthor}</p>
      </div>
    </div>
  )
}
