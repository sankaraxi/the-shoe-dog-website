import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
          alt="offer"
        />  

      </div>

      <div className="flex flex-1 flex-col">

        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
         <span className="text-coral-red inline-block mt-3 ">Special</span> Offers
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Discover a shopping experience like no other, where exceptional deals meet unmatched value. Explore top-tier selections and enjoy incredible savings that make us truly stand out.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Step into a world of endless possibilities crafted to meet your every desire and exceed your highest expectations. Your experience with us promises to be truly extraordinary.
        </p>

        <div className="mt-11 flex flex-wrap gap-4"> 
          <Button label="Shop now" iconURL={arrowRight}/>
          <Button label="Learn more" backgroundColor="bg-white" borderColor = "border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>

    </section>
  )
}

export default SpecialOffers