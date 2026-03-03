import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Whatdo from './components/Whatdo'
import Skills from './components/TechnicalSkill'
import Experience from './components/Experience'
import EducationExperienceTimeline from './components/Experience'
import TechnicalSkillsNext from './components/TechnicalSkill'
import MyFrontendSkillSlider from './components/TechnicalSkill'
import Technical from './components/Technical'
import Projects from './components/Projects'
import WhatICanDoForYou from './components/WhatICanDoForYou '
import ContactMe from './components/ContactMe '
import Footer from './components/Footer '

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-[#0b0f19] min-h-screen">
      <Header></Header>
      <Banner />
      <About/>
      <Whatdo/>
      <MyFrontendSkillSlider/>
     <EducationExperienceTimeline />
   <Technical/>
   <Projects/>
   <WhatICanDoForYou/>
   <ContactMe/>
   <Footer/>

    </div>
    </>
  )
}

export default App
