import Image, { StaticImageData } from 'next/image'

interface CardPorps {
  srcImage: StaticImageData
  namePerson: string
  nameAuthor: string
}

export const Card = ({ srcImage, namePerson, nameAuthor }: CardPorps) => {
  return (
    <div className=" w-[124px] cursor-pointer  border-4 border-blue-300 ">
      <div className="overflow-hidden">
        <Image
          className="w-full transition-all duration-300 ease-in-out hover:scale-110"
          src={srcImage}
          alt={namePerson}
        />
      </div>
      <div className=" border-2 border-black bg-yellow-500 py-1 text-center text-sm leading-none text-black ">
        <p>{namePerson}</p>
        <p>{nameAuthor}</p>
      </div>
    </div>
  )
}
