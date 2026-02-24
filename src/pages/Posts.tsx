import { useEffect, useState } from "react";
import Navbar from "../components/nav";
import { Link } from "wouter";

export const modules = import.meta.glob("/public/posts/*.md")

export default function Posts() {
    const [titles, setTitles] = useState<string[]>([])

    useEffect(() => {
        const titles = []
        for (const [k, _] of Object.entries(modules)) {
            const pieces = k.split("/")
            titles.push(pieces[pieces.length-1].split(".")[0])
        }
        setTitles(titles)
    }, [])

    return (
        <div className="bg-bg min-h-screen flex justify-center items-center flex-col text-text">
            <Navbar/>
            <div className="bg-bg2 min-h-screen w-full lg:w-[64rem] px-12 py-12 flex items-center flex-col">
                <h1 className="text-3xl font-bold">Posts</h1>

                {titles.map((v, i) => <Link key={i} className="text-2xl hover:underline" to={`/posts/${v}`}>{v}</Link>)}
            </div>
        </div>
    )
}