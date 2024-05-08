import Link from "next/link";

export default function Navbar() {
  return (
   
      <div className="bg-black text-white">
          <div>
          <ul className="flex">
            <li className="border border-white p-2 m-4 rounded-xl"> <Link href="/">Home</Link> </li>
            <li className="border border-white p-2 m-4 rounded-xl"><Link href="/about">About</Link></li>
            <li className="border border-white p-2 m-4 rounded-xl"> <Link href="/services">Services</Link></li>
            <li className="border border-white p-2 m-4 rounded-xl"><Link href="/contact">Contact us</Link></li>
          </ul>
        </div>
      </div>
    
  );
}
