export default function Hero() {
   return (
      <main className="h-auto lg:h-[1400px]">
         
        <div className="pt-20 sm:pt-40 lg:pt-[267px] pl-4 sm:pl-10 lg:pl-28">
      <img src="Heading.png" alt="Heading" className= "max-w-[300px] sm:max-w-[500px] lg:max-w-none" />
      </div>

            <div className="pt-6 lg:pt-10 px-6 lg:pl-28 space-y-4 lg:space-y-0 lg:space-x-2 flex flex-col lg:flex-row">
              <button className="rounded group relative border-2 h-12 w-full lg:w-48 border-black text-white bg-black hover:bg-slate-400">
               Start Learning Now
                </button>
                <button className="rounded group relative border-2 h-12 w-full lg:w-48 border-black text-black bg-transparent hover:bg-slate-300">
                Explore Courses
             </button>
        </div>
        <div className="lg:relative lg:flex lg:justify-end lg:-top-[570px] flex justify-center mt-6 lg:mt-0">
        <img
          src="image.jpeg"
          className="w-[640px] h-[900px] lg:w-[640px] lg:h-[1000px] lg:max-w-[800px] lg:max-h-[1200px]"
          alt="Image"
        />
      </div>

      {/* Logo Section */}
      <div className="flex justify-center relative lg:-top-[570px]">
        <img src="logo2.png" className="w-[1280px]" alt="Logo" />
      </div>
        
            
        </main>
    );
}

  