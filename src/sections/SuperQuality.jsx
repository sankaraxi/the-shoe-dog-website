import Button from "../components/Button"
import {shoe8} from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >

      <div className="flex flex-1 flex-col">

        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red inline-block mt-3 ">Super</span>
          <span className="text-coral-red inline-block mt-3 ">Quality</span> Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring the highest quality of our products is our top priority. We guarantee that you will be satisfied with the quality of our shoes.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Our dedicated team of experts is always ready to help you with any questions about our products.
        </p>

        <div className="mt-11">
          <Button label="View more"/>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img 
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />

      </div>

    </section>

  )
}

export default SuperQuality