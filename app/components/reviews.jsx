import Image from "next/image"

function Reviews(props) {
  return (
    <div className="w-[90%] md:w-[29%] h-44 rounded-lg bg-[#F8F7FD] p-4 relative">
        <p className="text-sm">{props.reviewMessage}</p>
        <div className="flex items-center absolute bottom-4 space-x-4">
            <Image src={props.image} alt="avatar" width={32} height={32} className="rounded-full" />
            <p className="text-xs">{props.name}</p>
        </div>
    </div>
  )
}

export default Reviews
