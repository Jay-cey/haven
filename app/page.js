import Image from 'next/image';
import Link from 'next/link';
import Images from './components/images';
import Reviews from './components/reviews';
import reviews from './reviews';
import Accordion from './components/accordion';
import accordionData from './accordionData';

export default function Home() {
  function createReviewCard(review) {
    return (
      <Reviews
        key = {review.id}
        name = {review.name}
        image = {review.image}
        reviewMessage = {review.reviewMessage}
      />
    )
  }

  function createAccordion(accordionData) {
    return(
      <Accordion
        key={accordionData.id}
        faq={accordionData.faq}
      />
    )
  }
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <section className="h-[90vh] bg-[url('/hero.png')] bg-cover bg-right md:bg-center w-full flex justify-center items-center">
        <div className='h-full w-full bg-black/60 text-white text-center flex flex-col justify-center items-center'>
          <div className='md:w-1/2 text-left md:text-center px-4 md:px-0'>
            <h2 className='text-2xl md:text-5xl mt-10 font-semibold leading-tight'>Find Strength and Resilience <br className="hidden md:block" /> in Therapy</h2>
            <p className='text-sm md:text-xl leading-snug mt-3 md:w-4/5 mx-auto'>
              Discover the flexibility and convenience of online professional therapy, empowering you to prioritize self-care on your terms.
            </p>
            <div className='flex space-x-2 md:space-x-10 mt-8 w-full justify-center items-center'>
              <Link href={'#'}>
                <button className='text-xs py-3 md:py-2 px-8 rounded-3xl bg-[#286256] md:text-sm font-medium '>
                  Individual Therapy
                </button>
              </Link>
              <Link href={'#'}>
                <button className='text-xs border border-solid border-white py-2 px-8 rounded-3xl text-white md:text-sm font-medium'>
                  Couples Therapy
                </button>
              </Link>
            </div> 
          </div>

          <div className='grid grid-cols-3 divide-x mt-28 md:w-4/5'>
            <p className='text-sm md:text-lg font-medium'>500+<span className='block text-sm font-normal'>verified therapists</span></p>
            <p className='text-sm md:text-lg font-medium'>3000+<span className='block text-sm font-normal'>satisfied clients</span></p>
            <p className='text-sm md:text-lg font-medium'>5+<span className='block text-sm font-normal'>years of experience</span></p>
          </div>
        </div>
      </section>

      {/* Private Consultations */}
      <section className='flex flex-col md:flex-row w-full min-h-fit md:min-h-screen py-24 md:pl-24 md:pr-10 space-x-20 md:mx-auto bg-[#EBE6DF]'>
        <div className='md:w-2/5 relative place-self-center space-y-5 px-4 md:px-0'>
          <Image src={"/image3.png"} alt="" className='rounded-md' height={30} width={64} />


          <h4 className='text-2xl md:text-4xl font-semibold'>
            Private consultations <br /> with <span className='text-[#286256]'>verified and professional</span> therapists
          </h4>
          <p>
            Experience confidential and personalized consultations with our trusted therapists. Our commitment to professionalism ensures that you receive expert care tailored to your unique needs, empowering you on your path to well-being from the comfort and privacy of your home.
          </p>
          <Link href={"#"} className='text-[#286256] font-medium block'>
            Get matched with a therapist <Image src="/vector.svg" alt='get matched with a therapist' width={10} height={10} className='inline-block'></Image>
          </Link>
        </div>

        <div className='hidden w-3/5 md:grid grid-cols-2 grid-rows-2 justify-items-center h-full gap-32'>
          <div className='w-40 h-52 rounded-tl- rounded-br-large rounded-tr-large overflow-hidden absolute self-center z-10'>
            <Image src={"/image3.png"} layout="fill" alt="" className='object-cover' />
          </div>
          <Images src="image1.png" className="absolute bottom-4" />
          <Images src="image4.png" className="absolute top-4" />
          <Images src="image2.png" className="absolute bottom-4" />
          <Images src="image5.png" className="absolute top-4" />
        </div>
      </section>

      {/* How it works */}
      <section className='flex flex-col w-full min-h-full py-14 md:py-0 md:h-[90vh] justify-center mx-auto bg-[#F2F1EE] space-y-14'>
        <div className='self-center text-center'>
          <h4 className="font-semibold text-3xl">How it works</h4>
          <p className='font-medium'>Start your journey the easy way</p>
        </div>

        <div className='md:grid grid-cols-3 space-y-7 md:space-y-0 md:gap-10 items-center justify-items-center relative'>

          <div className='text-center flex flex-col items-center space-y-4'>
            <h5 className='text-2xl font-semibold text-[#286256]'>Step 1</h5>
            <Image src={"/pana.svg"} height={10} width={130} alt=''/>
            <div className='w-full text-center flex flex-col'>
              <h6 className='font-semibold text-lg'>Take an assessment</h6>
              <p className='text-sm w-4/5 self-center'>Complete short questionnaire about you</p>
            </div>
          </div>

          <Image src={'/arrow.svg'} alt='pointing arrow' width={30} height={10} className='absolute left-1/3 hidden md:block'></Image>

          <div className='text-center flex flex-col items-center space-y-4'> 
            <h5 className='text-2xl font-semibold text-[#286256]'>Step 2</h5>
            <Image src={"/rafiki.svg"} width={71} height={120} alt=''/>
            <div className='w-full text-center flex flex-col'>
              <h6 className='font-semibold text-lg'>Get matched with a therapist</h6>
              <p className='text-sm w-3/5 self-center'>Connect with a therapist that is most suited for you</p>
            </div>
          </div>

          <Image src={'/arrow.svg'} alt='pointing arrow' width={30} height={10} className='absolute right-1/3 hidden md-this.  = this. .bind(this)'></Image>

          <div className='text-center flex flex-col items-center space-y-4'>            
            <h5 className='text-2xl font-semibold text-[#286256]'>Step 3</h5>
            <Image src={"/online.svg"} width={120} height={120} alt=''/>
            <div className='w-full text-center flex flex-col'>
              <h6 className='font-semibold text-lg'>Start therapy</h6>
              <p className='text-sm w-3/5 self-center'>Talk to your therapist anytime. You can also have video conversations.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Member Reviews */}
      <section className='flex flex-col justify-center space-y-10 w-full min-h-[80vh] mx-auto my-8'>
        <div className='self-center text-center'>
          <h4 className="font-semibold text-3xl">Member Reviews</h4>
          <p className='font-medium'>Real stories, real results</p>
        </div>

        <div className="flex flex-col space-y-5 md:space-y-0 items-center md:flex-row md:justify-center md:space-x-8 w-full">
          {reviews.map(createReviewCard)}
        </div>
        <div className="w-full text-center">
          <Link href={"#"} className='text-[#286256] font-medium'>
            Read more reviews &nbsp;
            <Image src="/vector.svg" alt='read more reviews' width={10} height={10} className='inline-block'></Image> 
          </Link>
        </div>
      </section>

      {/* Call to action */}
      <section className='flex flex-col justify-center w-full bg-[#286256] min-h-fit md:h-[40vh] text-white text-center space-y-7'>
          <div className='space-y-2'>
            <h5 className='font-semibold text-3xl'>Take our quick assessment test</h5>
            <p className='text-sm'>This would only take a few minutes. You get to see possible therapists that are your best fit</p>
          </div>
          <Link href={'#'}>
            <button className='border border-solid border-white py-2 px-8 rounded-3xl text-white text-sm font-medium'>
              Get Started
            </button>
          </Link>
      </section>

      {/* FAQ */}
      <section className='w-full min-h-fit md:min-h-screen py-14 bg-[#F2F1EE] flex flex-col text-center items-center space-y-8 md:space-y-16'>
        <h5 className='font-semibold text-2xl md:text-3xl'>Frequently Asked Questions</h5>
        <div className='w-4/5 divide-y-2 divide-[#8D9190] grid grid-flow-row'>
          {accordionData.map(createAccordion)}
        </div>
      </section>
    </main>
  )
}
