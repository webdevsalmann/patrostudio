import Image from "next/image";
import Link from "next/link";

export default function TechCard({ data:{href, imageUrl, icon, label} }) {
    return (
        <div className="relative p-2 size-full max-w-24 bg-background hover:bg-muted self-start flex-center flex-col rounded-md border">
            <div className="relative size-full p-1 flex-center aspect-square">
                {imageUrl ? <Image
                    width={100}
                    height={100}
                    src={imageUrl}
                    alt={label}
                /> : icon}
            </div>
            <span className='mt-2 relative text-center text-muted-foreground text-xs'>{label}</span>
        </div>
    )
}