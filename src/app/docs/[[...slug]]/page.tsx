export default async function docs({params}:
    {
        params : Promise<{slug : string[]}>
    }
) {
    const {slug} = await params
    if(slug?.length ===2) {
        return(
            <div>
                showing docs for feature {slug[0]} and concept {slug[1]}
            </div>
        )}
    else if(slug?.length ===1){
        return(
            <div>
                showing docs for feature {slug[0]}
            </div>
        )
    }    
    
    return (
        <div>
           
            <h1>Docs Home Page</h1>
        </div>
    );
}