
export const Proyect = ({ propiedades }) => {
    const { description, projectsImageSrc, githubLinkF = false, githubLinkB = false, deployLink = false, letterColor = "text-[--color5-l]" } = propiedades;

    return (
        <div className={`relative w-[300px] h-[300px] border-red-100 border-spacing-1 border p-2 bg-slate-500 shadow-2xl ${letterColor}`}>
            <img className="object-cover w-full h-full" src={projectsImageSrc} alt="" />

            <span className="flex flex-col p-4 absolute backdrop-blur hover:backdrop-blur-[20px] inset-0 items-center justify-between opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className={`text-justify ${letterColor} font-semibold`}>{description}</p>
                <div className="flex p-4 flex-row font-semibold">
                    {githubLinkF && <a className="ml-4 hover:text-yellow-300 cursor-pointer" href={githubLinkF} target="_blank">Github frontend</a>}
                    {githubLinkB && <a className="ml-4 hover:text-yellow-300 cursor-pointer" href={githubLinkB} target="_blank">Github backend</a>}
                    {deployLink && <a className="ml-4 hover:text-yellow-300 cursor-pointer" href={deployLink} target="_blank">Deploy</a>}
                </div>
            </span>
        </div>
    );
}