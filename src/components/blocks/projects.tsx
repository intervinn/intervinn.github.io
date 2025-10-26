
const projects = [
    {
        name: "ABQ",
        link: "https://github.com/intervinn/abq",
        techs: "go luau",
        description: "Go to Luau transpiler including macros, polyfills and CLI. Currently at early development."
    },
    {
        name: "lv3",
        link: "https://github.com/intervinn/lv3",
        techs: "kt",
        description: "A server-side Minecraft Fabric mod that adds a lives limit similar to Grian's Life Series. Was made for one of seasons on my SMP."
    },
    {
        name: "Noorse",
        link: "https://github.com/intervinn/noorse",
        techs: "go docker mysql",
        description: "A small Discord bot for storing member points on your server. Made for and is widely used at Check It Containment."
    },
    {
        name: "Expr",
        link: "https://github.com/intervinn/expr",
        techs: "cs",
        description: "My first interpreter with a complete lexer and parser. Consists of only number and strings literals and call expressions with possible custom functions."
    },
    {
        name: "Imoji",
        link: "https://github.com/intervinn/imoji",
        techs: "ts react tailwind",
        description: "Image to emoji converter. Tuned for pixel arts."
    },
    {
        name: "Brew a soup at 9pm",
        link: "https://www.roblox.com/games/124645588131182/brew-a-soup-at-9-pm",
        techs: "luau",
        description: "A gamejam project, me and my friends got 1st place and 1000 robux each."
    },
    {
        name: "Wirebox",
        link: "https://pesde.dev/packages/intervinn/wirebox",
        techs: "luau",
        description: "Constructor-based Dependency Injection for Luau"
    },
    {
        name: "Indium",
        link: "https://github.com/intervinn/indium",
        techs: "luau",
        description: "Backend library for Lune similar to Express."
    },
    {
        name: "Arc",
        link: "https://github.com/intervinn/arc",
        techs: "go",
        description: "Simple router wrapped around net/http, inspired by Fiber and Gin."
    }
]

export default function Projects() {
    return (
        <div className="text-text font-nunito h-fit w-full mt-5">
            <h1 className="text-3xl font-bold">Projects</h1>
            <div className="ml-12 mt-3">
                {projects.map(item => 
                    <div className="flex flex-col mt-3">
                        <div className="flex flex-row">
                            <a className="font-bold text-2xl hover:underline w-fit" href={item.link}>{item.name}</a>
                            {item.techs.split(" ").map(tech => 
                                <img className="object-contain w-6 mx-2" src={`${tech}.png`}/>
                            )}
                        </div>
                        <p>{item.description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
