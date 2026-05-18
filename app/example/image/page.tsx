import Image from "next/image";
import img2 from "@/app/assets/img2.jpeg";
export default function ImagePage() {
    return (
        <div>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
                alt="Example Image"
            />
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
                alt="Example Image"
                width={100}
                height={100}
            />

            <img
                src="/img1.webp"
                alt="Example Image 1"
            />
            <Image
                src="/img1.webp"
                alt="Example Image 1"
                width={100}
                height={100}
            />

            <Image
                src={img2}
                alt="Example Image 2"
                width={100}
                height={100}
            />
        </div>
    );
}