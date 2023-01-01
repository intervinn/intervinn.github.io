import { useEffect } from "react"
import AOS from "aos"

const Card = ({text}) => {
    return (
        <div className="card">
            {text}
        </div>
    )
}

const CardHolder = ({children}) => {
    return (
        <div align="center" className="card holder">
            {children}
        </div>
    )
}

const Langs = () => {
    return (
        <CardHolder>
            <Card text="JavaScript" />
            <Card text="TypeScript" />
            <Card text="Python" />
            <Card text="Lua" />
            <Card text="Luau" />
            <Card text="HTML & CSS" />
        </CardHolder>
    )
}

const Libs = () => {
    return (
        <CardHolder>
            <Card text="Flask" />
            <Card text="FastAPI" />
            <Card text="NextJS" />
            <Card text="NuxtJS" />
            <Card text="React" />
            <Card text="Vue" />
            <Card text="Express" />
            <Card text="NestJS" />
        </CardHolder>
    )
}

const DBs = () => {
    return (
        <CardHolder>
            <Card text="MongoDB" />
        </CardHolder>
    )
}

const Techs = () => {
    useEffect(() => {
        AOS.init()
    })
    return (
        <div className="techs">
            <h1 data-aos="zoom-in">My skills</h1>
            <div className="card bg">
                <div data-aos="flip-left">
                    <h2>Programming Languages</h2>
                    <Langs/>
                </div>
                <div data-aos="flip-right">
                    <h2>Frameworks & Libraries</h2>
                    <Libs/>
                </div>
                <div data-aos="flip-up">
                    <h2>Databases</h2>
                    <DBs/>
                </div>
            </div>
        </div>
    )
}

export default Techs