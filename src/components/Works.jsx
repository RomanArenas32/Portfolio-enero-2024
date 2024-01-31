import imgteclab from '../assets/jobs/teclab.jpg';
import imgRedusers from '../assets/jobs/redusers.jpg';


export const Works = () => {

  return (
    <div className='bg-[--color2-l] my-8'>
      <h2 className=" text-center text-3xl font-bold mb-10 text-[--color5-l] shadow-2xl py-3">Experience</h2>
      <div className="flex flex-wrap gap-2  text-[--color1-l] my-8 p-6 justify-center">



        {/* REDUSERS */}
        <div className=''>
          <div id="form-container" className="flex flex-col justify-between h-full bg-[--color1-l] p-16 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out">
            <div>
              <img src={imgRedusers} alt="redusers" className='my-2'/>
              <h6 className='text-[--color4-l] font-medium text-center'>2023-actually</h6>
              <p className='text-[--color4-l] text-justify'>
              I perform tasks as a full-stack developer, employing a wide range of technologies. Additionally, I create reports demonstrating the use of these technologies, following best practices and clean coding principles.
              </p>
            </div>
          </div>
        </div>

        {/* teclab */}
        <div >
          <div id="form-container" className="h-full bg-[--color1-l] p-16 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out flex flex-col justify-between">
          
            <div>
              <img src={imgteclab} alt="teclab" className='my-2'/>
              <h6 className='text-[--color4-l] font-medium text-center'>2023-actually</h6>
              <p className='text-[--color4-l] text-justify'>
                I perform tasks as a tutor, guiding students with their web, mobile, and cybersecurity projects. I address technical questions, assist in managing their project timelines, and provide support to help them overcome challenges.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
