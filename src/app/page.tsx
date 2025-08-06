import Link from "next/link";

export default function Home(){
    return(
        <div className="flex bg-gray-400 text-white gap-5" >
            <h1>Home</h1>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Products</Link>
        </div>
    )
}