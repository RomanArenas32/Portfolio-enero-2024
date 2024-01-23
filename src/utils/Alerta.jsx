export const Alerta = ({ alerta }) => {
    const { msg, error } = alerta;

    return (
        <div className={error ? "bg-red-600 text-[--color1-l] p-4 rounded-lg font-bold shadow-2xl " : " shadow-2xl bg-green-500 text-[--color1-l] p-4 rounded-lg font-bold"}>
            <p>{msg}</p>
        </div>
    );
};