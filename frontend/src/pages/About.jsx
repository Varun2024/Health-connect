
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='md:mx-15'>
      <div className="bg-gradient-to-tr from-[#EE9AE5] to-[#5961F9] rounded-lg shadow-lg md:mb-10">
        <div className='text-center text-2xl pt-10 text-gray-200  '>
          <p>ABOUT <span className='semibold text-gray-900'>US</span></p>
        </div>

        <div className=' flex flex-col md:flex-row md:mx-15 gap-12 '>
          <img className='w-full md:max-w-[360px] mb-10 pl-10' src={assets.abt} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-md text-white'>
          <p>At HealthConnect, we are committed to revolutionizing healthcare management by addressing key inefficiencies in the appointment scheduling process, patient record management, and patient-doctor communication. Our platform is designed with the goal of making healthcare more accessible, organized, and efficient for both patients and healthcare providers.</p>
                  <p>HealthConnect provides a seamless, user-friendly experience that enables patients to easily schedule appointments with trusted doctors. By simplifying this process, we aim to eliminate the traditional challenges of long wait times, scheduling conflicts, and administrative bottlenecks.</p>
                  {/* <b className='text-white  text-center'>Our Vision</b>
                  <p>At HealthConnect, our vision is to create a world where healthcare is easily accessible, efficient, and patient-centered. We strive to bridge the gap between patients and healthcare providers by leveraging cutting-edge technology to streamline appointment scheduling, enhance medical record management, and improve communication.</p>     */}
          </div>
        </div>
      </div>

      

      <div className='text-2xl my-4 text-center mt-24 mb-10'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20 space-x-5'>
        <div className='border-2 shadow-lg px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-orange-500 hover:text-white hover:scale-105 transition-all ease-in-out duration-200 delay-130 hover:shadow-lg text-gray-600 cursor-pointer rounded-lg  '>
            <b className='text-lg'>AI-powered ChatBot:</b>
            <p>AI assitance at your service to help you navigate through the site</p>
           </div>
           <div className='border-2 shadow-lg  px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-orange-500 hover:text-white hover:scale-105 transition-all ease-in-out duration-200 delay-130 hover:shadow-md text-gray-600 cursor-pointer rounded-lg'>
           <b className='text-lg'>Doctor Recommender:</b>
           <p>Based on your feedback and diagnose history our chatbot will recommend you Suitable doctor</p>
           </div>
           <div className='border-2 shadow-lg  px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-orange-500 hover:text-white hover:scale-105 transition-all ease-in-out duration-200 delay-130 hover:shadow-md text-gray-600 cursor-pointer rounded-lg'>
           <b className='text-lg'>Symptom Checker:</b>
           <p>You can have a friendly chat and discuss your Symptom with the chatbot to recognise the disease you are suffering with</p>
           </div>
           <div className='border-2 shadow-lg  px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-orange-500 hover:text-white hover:scale-105 transition-all ease-in-out duration-200 delay-130 hover:shadow-md text-gray-600 cursor-pointer rounded-lg'>
           <b className='text-lg'>Personalization:</b>
           <p>Tailored recommendations and reminders to help you stay on top of your health</p>
           </div>
      </div>

    </div>
  )
}

export default About

