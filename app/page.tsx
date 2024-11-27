import CouponCard from "@/components/CouponCard";
export default function Home() {
  return (<>
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center py-10">
            <header className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>
            </header>
            <main className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <CouponCard></CouponCard>
                </div>
            </main>
        </div>
  </>);
}
