import { useEffect } from "react"
import AOS from "aos"

const Hero = () => {
    
    useEffect(() => {
        AOS.init()
    })

    return (
        <header className="hero">
            <div data-aos="fade-down">
                <h1 align="center">Hey there, I am Intervinn</h1>
                <h2 align="center">I am a programmer from Russia</h2>
                <h3 align="center">I am 14 years old and I wish to become a Full-Stack Web Developer</h3>
            </div>
            <h2 data-aos="fade-down" className="arrow">↓</h2>
        </header>
    )
}

export default Hero