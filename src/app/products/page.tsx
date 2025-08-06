import Link from "next/link";

export default function roducts() {
    return (
        <div>
            <h1>Products lists :</h1>
            <h2>Product 1 <Link href="/products/1">Details</Link></h2>
            <h2>Product 2</h2>
            <h2>Product 3</h2>
        </div>
    );
}