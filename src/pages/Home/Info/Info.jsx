import {FcAlarmClock, FcCalendar} from 'react-icons/fc'
import {TbPhoneCall} from 'react-icons/tb'
import {CiLocationOn} from 'react-icons/ci'



const Info = () => {
    return (
        <div className="w-full h-[250px] mt-10 rounded-lg bg-black">
           <div className=' flex justify-around items-center '>
           <div className=' text-white flex justify-center items-center mt-20 gap-2 md:gap-4 lg:gap-4'>
            <div className=' relative'>
            <FcCalendar className=' text-4xl'></FcCalendar>
            <FcAlarmClock className=' absolute text-xl top-4 left-4'></FcAlarmClock>
            </div>
            <div>
                <h2 className=' text-base font-medium'>We are open monday-friday</h2>
                <h2 className=' text-lg font-bold'>7:00 am - 9:00 pm</h2>
            </div>
            </div> 
           <div className=' text-white flex justify-center items-center mt-20 gap-2 md:gap-4 lg:gap-4'>
           <div className=' relative'>
            <TbPhoneCall className=' text-4xl '></TbPhoneCall>
            </div>
            <div>
                <h2 className=' text-base font-medium'>Have a question?</h2>
                <h2 className=' text-lg font-bold'>+2546 251 2658</h2>
            </div>
            </div> 
           <div className=' text-white flex justify-center items-center mt-20 gap-2 md:gap-4 lg:gap-4'>
           <div className=' relative'>
            <CiLocationOn className=' text-4xl'></CiLocationOn>
            </div>
            <div>
                <h2 className=' text-base font-medium'>Need a repair? our address</h2>
                <h2 className=' text-lg font-bold'>Liza Street, New York</h2>
            </div>
            </div> 
           </div>
        </div>
    );
};

export default Info;