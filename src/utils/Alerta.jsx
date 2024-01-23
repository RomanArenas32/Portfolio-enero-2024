export const Alerta = ({ mensaje }) => {
    const { msg, error } = mensaje;

    return (
        <div className={error ? "bg-red-600 text-white" : "bg-green-500 text-white"}>
            <p>{msg}</p>
        </div>
    );
};