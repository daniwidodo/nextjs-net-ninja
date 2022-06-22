import Link from "next/link";

const NotFound = () => {
    return ( 
        <div>
            <h1>Not found </h1>
            <Link href="/"><a >back to homepage</a></Link>
        </div>
     );
}
 
export default NotFound;