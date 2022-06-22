import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Navigation</h1>

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
    </nav>
  );
};

export default Navbar;
