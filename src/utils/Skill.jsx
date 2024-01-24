
export const Skill = ({ img }) => {
    const {src, skillName} = img;
    return (
        <div className="w-36 rounded-full items-center text-center flex justify-center bg-[--color1-l] shadow-xl h-36">
            <img src={src} alt={skillName} className="bg-cover"/>
        </div>
    )
}
