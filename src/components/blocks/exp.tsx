
const experience = [
    {
        name: "PFTracker",
        link: "https://tracker.project-flight.com",
        time: "March 2025 - Present",
        techs: "go redis docker pg ts",
        description: "Backend & Infra"
    },
    {
        name: "Check It Containment",
        link: "https://www.roblox.com/communities/6016348/Check-It-Containment-Corporation#!/about",
        time: "January 2025 - Present",
        techs: "go luau",
        description: "Senior Developer. Worked on V1R and a custom webhook proxy"
    },
    {
        name: "Amicitia Devs",
        link: "https://www.roblox.com/games/102259817027922/Let-Him-Go",
        time: "April 2025 - May 2025",
        techs: "luau",
        description: "Hired Developer. Scripted the last update for the game with bugfixes and additions."
    }
]

export default function Experience() {
    return (
        <div className="text-text font-nunito h-fit w-full mt-5">
            <h1 className="text-3xl font-bold">Experience</h1>
            <div className="ml-12 mt-3">
                {experience.map(item => 
                    <div className="flex flex-col mt-3">
                        <a className="font-bold text-2xl hover:underline w-fit" href={item.link}>{item.name}</a>
                        <a className="text-sm">{item.time}</a>
                        <div className="flex flex-row">
                            {item.techs.split(" ").map(tech => 
                                <img className="object-contain w-8 mx-2" src={`${tech}.png`}/>
                            )}
                        </div>
                        <p>{item.description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
