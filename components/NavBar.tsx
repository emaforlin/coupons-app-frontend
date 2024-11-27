import Link from "next/link"
export function NavBar() {
  return (
    <>
    <div className="bg-green-200 text-gray-800 sticky top-0 z-10">
      <div className="container mx-auto  px-5 py-4">
        <nav className="flex justify-between items-center">
          <h2 className="flex justify-center font-bold text-2xl text-slate-800">Coupons App</h2>
          <ul className="flex gap-6 justify-center font-bold text-xl text-green-700">
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
          </ul>
        </nav>
      </div>
    </div>
    </>
  );
}