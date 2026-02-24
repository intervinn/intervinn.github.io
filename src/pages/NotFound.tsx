import Navbar from "../components/nav";

export default function NotFound() {
    return (
        <div className="bg-bg min-w-screen min-h-screen flex justify-center items-center flex-col text-text">
            <Navbar/>
            <div className="bg-bg2 min-h-screen w-full lg:w-[64rem] px-12 py-12">
                <h1>Wandering is a terrible sin</h1>
            </div>
        </div>
    )
}