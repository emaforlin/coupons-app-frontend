import Image from "next/image";
import Link from "next/link";

const CouponCard = () => {
    return (
        <Link href={`/coupons/coupn123`}>
        <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-slate-50 max-h-80 p-3">
            <Image src="/square.png" 
                alt="coupon image" 
                width={120} 
                height={120}
                className="w-full h-48 object-cover rounded-md">
            </Image>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{`20% Off en medialunas...`}</h2>
            </div>
        </div>
        </Link>
    )
}

export default CouponCard;