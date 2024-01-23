import { AiFillLinkedin, AiOutlineFilePdf, AiFillGithub } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

export const SlideBar = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <AiFillLinkedin size={30} className="cursor-pointer" />
        </>
      ),
      href: "https://www.linkedin.com/in/roman-emiliano-arenas-55b8561aa/",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <AiFillGithub size={30} />
        </>
      ),
      href: "https://github.com/RomanArenas32",
    },
    {
      id: 3,
      child: (
        <>
          Mail <BsFillPersonFill size={30} />
        </>
      ),
      href: "roman.ea3232@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <AiOutlineFilePdf size={30} />
        </>
      ),
      href: "../assets/cv/ArenasRomanEmiliano-CV.pfdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="flex right-0 items-center bg-slate-400 bg-opacity-50  justify-evenly fixed top-40 p-4 flex-col">
      {links.map(({ id, child, href, style, download }) => (
        <div key={id} className={"right-0 mt-4 flex duration-300 hover:mr-4"}>
          <a
            href={href}
            className="flex justify-between items-center w-full
         text-white"
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            {child}
          </a>
        </div>
      ))}
    </div>
  );
};

