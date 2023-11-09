import Image from "next/image";

function Images(props) {
  return (
    <div className={"relative w-40 h-52 rounded-tl- rounded-br-large rounded-tl-large overflow-hidden flex" + props.className}>
      <Image src={"/" + props.src} layout="fill" alt="" className="object-cover" />
    </div>
  )
}

export default Images