import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <Image src={"/vercel.svg"} width={100} height={80} alt="fuck it" />
        
        <div className="menu-bar">
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
        <Link href="/ninja/ninjas">
          <a>ninjas</a>
        </Link>
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
