import whhatsapp from '../assets/tecnologies/whatsapp.webp'

export const WhatsApp = () => {
    return (
        <div className="w-28 h-28 my-4 mx-8">
            <a href="http://api.whatsapp.com/send?phone=+542281568550&text=Hola Roman me gustaria contactar contigo" target="_blank" rel="noreferrer" ><img src={whhatsapp} alt="whatsapp" className="" /></a>
        </div>
    )
}
