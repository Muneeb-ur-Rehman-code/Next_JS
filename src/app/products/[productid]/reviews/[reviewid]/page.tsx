export default async function ProducReview(
    {params}:{
        params: Promise<{productid:string; reviewid:string}>
    }
){
    const {productid, reviewid} = await params
    return(
        <div>
            <h1>
                Review {reviewid} for product {productid}
            </h1>
        </div>
    )
}