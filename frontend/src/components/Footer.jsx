
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-15 rounded-md'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img className='pb-5' src={assets.logo1} alt="HealthConnect Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6 tex'>
            HealthConnect is a comprehensive health appointment management platform that
            connects patients with doctors, streamlines appointment scheduling, and enhances
            the overall healthcare experience. With advanced features like AI-powered doctor
            recommendations, telemedicine integration, health record management,
            HealthConnect makes healthcare more accessible, secure, and efficient.
          </p>
        </div>

        <div className='bg-orange-500 text-white px-5 rounded-lg hover:scale-105 transition-all duration-200 delay-150 hover:shadow-lg'>
          <p className='text-xl font-medium pt-5 mb-5 text-gray-900'>COMPANY</p>
          <ul className='flex flex-col gap-2 hover:cursor-pointer'>
            <li className='hover:underline'>Home</li>
            <li className='hover:underline'>About Us</li>
            <li className='hover:underline'>Contact Us</li>
            <li className='hover:underline '>Privacy Policy</li>
          </ul>
        </div>

        <div className='bg-gray-900 px-5 rounded-lg hover:scale-105 transition-all duration-200 delay-150 hover:shadow-lggit'>
          <p className='text-xl font-medium mb-5 pt-5 text-white '>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-white'>
            <li>+91 12345 67890</li>
            <li>healthconnect@gmail.com</li>  
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-white text-sm text-center bg-gray-900 rounded-sm'>Copyright 2024 @ HealthConnect - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
