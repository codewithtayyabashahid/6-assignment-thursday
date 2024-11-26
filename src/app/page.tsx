
import Hero from "../../components/hero"
import Header from "../../components/header"
import Achivements from "../../components/Achivements"
import Category from "../../components/Category"
import Courses from "../../components/Courses"
import Team from "../../components/Team"
import Testimonial from "../../components/Testimonial"
import Footer from "../../components/Footer"


export default function Home() {
  return (
      <main>
        
<div>
  <Header />
  <Hero />
  <Category/>
  <Achivements />
  <Courses />
  <Team />
  <Testimonial />
  <Footer />

</div>
</main>
)
}
