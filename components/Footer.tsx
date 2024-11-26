export default function Footer() {
    return (
        <main className="w-full max-w-[1280px] mx-auto px-4 lg:px-0 h-auto">
            {/* Newsletter Section */}
            <div className="pt-8 sm:pt-12 lg:pt-20 pl-0 lg:pl-28">
                <img
                    src="Newsletter.png"
                    alt="Newsletter"
                    className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] mx-auto"
                />
            </div>

            {/* Designer Library Section */}
            <div className="pt-6 sm:pt-8 lg:pt-10 pl-0 lg:pl-28">
                <img
                    src="Ddsgnr Library.png"
                    alt="Ddsgnr Library"
                    className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] mx-auto"
                />
            </div>

            {/* Links Section */}
            <div className="flex justify-center pt-6 sm:pt-8 lg:pt-10">
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    <img
                        src="courses.png"
                        alt="Courses"
                        className="w-[100px] sm:w-[120px] lg:w-[150px] mx-auto"
                    />
                    <img
                        src="resources.png"
                        alt="Resources"
                        className="w-[100px] sm:w-[120px] lg:w-[150px] mx-auto"
                    />
                    <img
                        src="about us.png"
                        alt="About Us"
                        className="w-[100px] sm:w-[120px] lg:w-[150px] mx-auto"
                    />
                </div>
            </div>

            {/* Credits Section */}
            <div className="flex justify-center pt-12 sm:pt-16 lg:pt-20 px-0 lg:px-28">
                <img
                    src="Credits.png"
                    alt="Credits"
                    className="w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] mx-auto"
                />
            </div>
        </main>
    );
}
