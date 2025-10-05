
export default function Navbar() {
    return (
        <div className="w-full lg:w-[64rem] my-2 flex flex-row justify-between text-text items-end">
            <div className="flex flex-row items-end">
                <img src="intrvn.png" className="object-fit aspect-video h-20"/>
                <a className="font-bold text-2xl ml-5 hover:underline" href="https://github.com/intervinn">GitHub</a>
            </div>
        </div>
    )
}