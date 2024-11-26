export default function Category() {
    return (
        <main className="w-full max-w-[1280px] mx-auto px-4 lg:px-0 h-auto">
            
            <div className="flex justify-center">
                <h1 className="text-2xl lg:text-5xl font-bold text-center">
                    Explore Courses By Category
                </h1>
            </div>
            <div className="flex justify-center pt-4 lg:pt-9">
                <p className="text-sm lg:text-base text-center">
                    Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                </p>
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 lg:pt-20">
                <img src="design n devel.png" alt="Design & Development" className="w-full" />
                <img src="marketing.png" alt="Marketing" className="w-full" />
                <img src="development.png" alt="Development" className="w-full" />
                <img src="communication.png" alt="Communication" className="w-full" />
                <img src="digital mark.png" alt="Digital Marketing" className="w-full" />
                <img src="self development.png" alt="Self Development" className="w-full" />
                <img src="business.png" alt="Business" className="w-full" />
                <img src="finance.png" alt="Finance" className="w-full" />
                <img src="consulting.png" alt="Consulting" className="w-full" />
            </div>

            <div className="flex justify-center pt-10 lg:pt-32">
                <button className="rounded group relative border-2 h-12 w-full max-w-[200px] bg-transparent border-black text-lg text-black hover:bg-slate-300">
                    View All Courses
                </button>
            </div>
        </main>
    );
}
