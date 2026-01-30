
export default function Head() {
    return (
        <div className="flex flex-col md:flex-row text-text font-nunito h-fit w-full mt-5">
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold">Welcome</h1>
                <p className="mt-3">
                    I'm Intervinn, a backend developer and software engineering enthusiast.
                    My work covers a lot of fields: systems programming, backend development, game development, sometimes devops and embedded.
                </p>
                <p className="mt-3">
                    I'm passionate about open source and my dream is to create useful software and libraries. 
                    My PC dual boots Windows and Arch Linux and I also own a macbook.
                </p>
                <p className="mt-3">
                    I manage a <a className="text-accent hover:underline" href="https://discord.gg/gqrUH3hFhf"> Minecraft SMP </a>
                    where I play with my friends. 
                    
                </p>
                <p className="mt-3">
                    Also check out my friends websites:
                    <a className="text-accent hover:underline" href="https://kotyarendj.github.io"> Kot</a>,
                    <a className="text-accent hover:underline" href="https://tabller.github.io"> Tomat</a>
                    <br/>
                    Other projects by my friends: <a className="text-accent hover:underline" href="https://patreon.com/seathar">Seathar</a>
                </p>
            </div>
            <div className="w-[24rem] h-[13.5rem] aspect-video mt-12 mx-2">
                <a href="https://discord.com/users/347365756301737994">
                    <img className="aspect-auto w-[24rem] h-[13.5rem]" src="https://lanyard.cnrad.dev/api/347365756301737994?bg=1e1e2e&theme=dark&hideTimestamp=false&idleMessage=doing%20nothing" />
                </a>
            </div>
        </div>
    )
}
