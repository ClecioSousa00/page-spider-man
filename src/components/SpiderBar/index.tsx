import Image from 'next/image'
import spiderImage from '../../assets/images/spider-bar.svg'

export const SpiderBar = () => {
  return (
    <div className="relative ml-20 mt-10">
      <Image className="w-8" src={spiderImage} alt="Barra Spider man" />
      <div className="absolute top-0 ml-11 space-y-[2.65rem]">
        <p>2099</p>
        <p>2018</p>
        <p>2009</p>
        <p>2002</p>
        <p>1923</p>
      </div>
    </div>
  )
}
