import Link from "next/link";
import { CgMenuGridO } from "react-icons/cg";

function Header() {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com" className="hover:underline">
          Gmail
        </Link>
        <Link href="https://image.google.com" className="hover:underline">
          Images
        </Link>
        <CgMenuGridO className="bg-transparent text-black text-4xl hover:bg-gray-200 p-2 rounded-full" />
        <button className="text-white bg-blue-500 px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
}

export default Header;
