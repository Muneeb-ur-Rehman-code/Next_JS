export default async function Docs({params}:{
    params: Promise<{slug: string[]}>
}) {
    const {slug} = await params
    
    return (
        <div>
            <h1>Documents Home Page</h1>
        </div>
    );
}