import { GenerateApiCardProps } from "@/lib/definitions";
import Link from "next/link";
import Image from "next/image";

export default function GenerateApiCardComponent({ image, title, desc, icon: Icon, url }: GenerateApiCardProps) {
  return (
    <Link href={url}>
      <div className="card my-3 md:my-0 overflow-hidden rounded-3xl card-compact w-72 h-72 bg-base-100 shadow-md">
        <figure>
          <Image className="py-2" width={180} src={image} alt={title} />
        </figure>
        <div className="card-body bg-backgroundColor items-center ">
          <div className="flex gap-3 items-center text-h18 font-medium">
            <Icon />
            <p>{title}</p>
          </div>
          <p className="text-h12 text-descriptionColor text-gray text-center">{desc}</p>
        </div>
      </div>
    </Link>
  );
}
