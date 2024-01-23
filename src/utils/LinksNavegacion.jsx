import { Link } from "react-scroll"

export const LinksNavegacion = ({ nombre, direccion }) => {
    return (
        <Link className="text-[30px] text-[--color1-l] cursor-pointer hover:text-yellow-500"
            to={direccion}
            smooth="true">
            {nombre}
        </Link>
    )
}
