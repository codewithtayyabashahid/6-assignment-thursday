import { DiVim } from "react-icons/di";

export default function Courses() {
    return (
        <main className="w-full max-w-[1280px] mx-auto px-4 lg:px-0 h-auto">
           
            <div>
                <h1 className="text-3xl lg:text-5xl font-bold text-center pt-16 lg:pt-32">Courses</h1>
            </div>

            
            <div className="flex justify-center pt-4 lg:pt-6">
                <p className="text-sm lg:text-base text-center">Your Ultimate Guide To Learning</p>
            </div>

          
            <div className="flex justify-center pt-8 lg:pt-16">
                <h1 className="text-sm lg:text-base space-x-5">
                    <span className="underline">Popular</span>
                    <span>Recommended</span>
                    <span>Best Price</span>
                </h1>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 lg:pt-20">
                <img src="designcard.png" alt="Design Card" className="w-full object-cover" />
                <img src="programmingcard.png" alt="Programming Card" className="w-full object-cover" />
                <img src="businesscard.png" alt="Business Card" className="w-full object-cover" />
                <img src="Artcard.png" alt="Art Card" className="w-full object-cover" />
                <img src="Lawcard.png" alt="Law Card" className="w-full object-cover" />
                <img src="Techcard.png" alt="Tech Card" className="w-full object-cover" />
            </div>

          
            <div className="flex justify-center pt-16 lg:pt-32">
                <button className="rounded group relative border-2 h-12 w-full max-w-[200px] bg-transparent border-black text-sm lg:text-lg text-black hover:bg-slate-300">
                    View All Courses
                </button>
            </div>
        </main>
    );
}
