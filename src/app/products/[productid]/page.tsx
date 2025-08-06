export default async function ProductDetails({params} : {
    params: Promise<{ productid: string}>
}) {
    const productid = (await params).productid
    return (
        
        <div>Details about the product {productid}</div>
    );
}