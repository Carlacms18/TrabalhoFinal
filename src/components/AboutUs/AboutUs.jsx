
import SaoPedro from "../../assets/SaoPedro.jpg"
import Tartaruga from "../../assets/tartaruga.jpg"
import Baia from "../../assets/Baia.jpg"
const AboutUs = () => {
  return (
    <>
      <section id="header" className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src={SaoPedro}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src={Tartaruga}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src={Baia}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-bold text-primary sm:text-[40px]/[48px]">
                  Why Choose Us
                </span>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                Brisa d{"'"}Mindel is a travel and excursion agency dedicated to providing authentic experiences on the island of São Vicente in Cape Verde. 
                With a passionate team that knows the local culture, our mission is to offer visitors an immersion in the island{"'"}s natural beauty and rich cultural heritage.
                </p>
                <h2 className="mb-5 text-3xl font-bold text-black block:text-white sm:text-[20px]/[28px]">
                What Makes Us Unique
                </h2>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                At Brisa d{"'"}Mindel, we believe that every trip should be a unique experience. What sets us apart is our commitment to creating personalized tours, tailored to our clients interests and preferences.
                 With passionate and experienced local guides, we offer an authentic look at life in São Vicente, revealing secret corners and stories that cannot be found in traditional guidebooks. 
                 In addition, we prioritize quality service, ensuring that each visitor feels welcome from the first contact until the end of the trip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
