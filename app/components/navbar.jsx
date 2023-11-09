import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className='sticky top-0 w-full flex bg-white py-4 justify-around items-center z-30'>
      <div>
        <Image src="/Logo.svg" alt="Haven Therapy Logo" width={138} height={64} />
      </div>

      <div className="hidden md:block">
        <ul className="flex list-none text-sm space-x-8 font-medium tracking-tight">
            <Link href={"#"}>
                <li>How it works</li>
            </Link>
            <Link href={"#"}>
                <li>About</li>
            </Link>
            <Link href={"#"}>
                <li>Reviews</li>
            </Link>
            <Link href={"#"}>
                <li>FAQ</li>
            </Link>
            <Link href={"#"}>
                <li>Therapist Job</li>
            </Link>
        </ul>
      </div>

      <div className="space-x-4">
        <Link href={'#'} className="hidden md:block">
            <button className="border border-solid border-[#286256] py-1 px-8 rounded-2xl text-[#286256] text-sm font-medium">Login</button>
        </Link>
        <Link href={"#"}>
            <button className="border bg-[#286256] py-1 px-6 rounded-2xl font-medium text-sm text-white">Get Started</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
