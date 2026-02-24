import { Suspense, use, useMemo } from "react";
import Navbar from "../components/nav";
import Loading from "./Loading";
import { Redirect, useLocation } from "wouter";
import { modules } from "./Posts";

export function Post(props: any) {
    const name = props.name

    console.log(name)
     /* @vite-ignore */
    const dataPromise = useMemo(() => {
        const key = `/src/assets/posts/${name}.md`
        return modules[key]().catch(err => {error: err})
    }, [name])

    const module: any = use(dataPromise)

    if (module === undefined || module.error) {
        return <Redirect to="/not-found"/>
    }

    return <module.ReactComponent/>
}

export default function GetPost(_: any) {
    const [location] = useLocation()
    const name = location.split("/")[location.split("/").length-1]

    return <Suspense fallback={<Loading/>}>
        <div className="bg-bg min-w-screen min-h-screen flex justify-center items-center flex-col text-text">
            <Navbar/>
            <div className="bg-bg2 min-h-screen w-full lg:w-[64rem] px-12 py-12">
                <Post name={name}/>
            </div>
        </div>
    </Suspense>
}