import Image from "next/image";
// import Link from "next/link";

function Footer() {
    const services = ['Home', 'Online Therapy', 'Reviews', 'For Therapists', 'Find a Therapist'];
    const company = ['About Us', 'Contact', 'Careers', 'Become Partner'];
    const resources = ['Support', 'Privacy Policy', 'Blogs', 'Terms and Condition', 'FAQ'];

    const ListItem = ({ title, items }) => (
        <div className="md:space-y-2">
            <h6 className="font-semibold">{title}</h6>
            <ul className="text-sm space-y-2 md:font-medium">
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
     );
  return (
    <footer className='w-[90vw] md:w-full min-h-fit mx-auto flex flex-col py-16'>
        <div className="w-[85%] md:grid grid-cols-4 md:mx-auto mt-5 p-4 md:p-0 space-y-3 md:space-y-0">
            <div>
                <Image src={'/Logo.svg'} alt="logo" width={138} height={32} />
            </div>
            <ListItem title="SERVICES" items={services} />
            <ListItem title="COMPANY" items={company} />
            <ListItem title="RESOURCES" items={resources} />
        </div>

        <hr className="w-[85%] mx-auto mt-10" />

        <div className="flex flex-col px-4 md:px-0 md:grid grid-cols-12 grid-rows-2 md:w-[85%] gap-y-3 mt-5 md:mt-10 md:mx-auto">
            <div className="row-span-2 col-span-9 ]">
                <p className="text-sm">©2023 Havens Therapy.</p>
            </div>
            <div className="flex space-x-6 col-span-3">
                <Image src={"/facebook.svg"} alt="" height={18} width={8} />
                <Image src={"/instagram.svg"} alt="" height={18} width={18} />
                <Image src={"/twitter.svg"} alt="" height={18} width={18} />
                <Image src={"/linkedin.svg"} alt="" height={18} width={18} />
            </div>
            <div>
                <Image src={"/secure-logo.svg"} alt="" height={48} width={64} />
            </div>
        </div>
    </footer>
  )
}

export default Footer
