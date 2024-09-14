import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img 
            src={imgURL}
            className="w-[280px] h-[280px]"
        />

        <div className="mt-8 justify-start flex gap-2.5">
            <img
                src={star}
                alt="star icon"
                width={24}
                height={24}
            />
            <p className='font-montserrat leading-normal text-xl text-slate-gray'>
                (4.5)
            </p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-palanquin font-semibold'>
            {name}
        </h3>
        <p className='mt-2 text-2lx text-coral-red leading-normal font-montserrat font-semibold'>
            {price}
        </p>
    </div>
  )
}

export default PopularProductCard