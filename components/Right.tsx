import DateInputBox from "./DateInputBox";
import InputBox from "./InputBox";
import PercentageSlider from "./PercentageSlider";
import ToggleButton from "./ToggleButton";

export default function Right(){
    const handleToggle = (isToggled: boolean) => {
        console.log('Toggled:', isToggled);
    };
    const handlePercentageChange = (value: number) => {
        console.log('Percentage:', value);
    };
    return (
        <div className="md:ml-16">
            <div className='md:ml-16 mt-8 md:mt-0'>
                <h2 className='text-slate-500 m-4 font-semibold mb:4 md:mb-0'>ONBOARDING</h2>
                <div className="flex flex-col gap-16  p-5">
                    <div className="mt-36 md:mt-0 mb-7"><DateInputBox label="Starts On" placeholder=" 21 / 05 / 2024 "/></div>

                    <ToggleButton label="Onboarding Required" onToggle={handleToggle}/>

                    <div className=" mt-5 md:mt-0" >
                        
                         <span className="text-lg   font-lg text-gray-700 mt-5 mb-5">Current Status</span>
                        <div className="flex justify-center items-center gap-5 mb-5 mt-5"> 
                            <div className="p-2 rounded-lg bg-slate-200 w-28">Onboarding</div>
                        
                            <PercentageSlider onChange={handlePercentageChange}/>
                        </div>
                    </div>
                </div>
            </div>

                    <div className='md:ml-16 lg:mt-8  lg:w-108 gap-5 '>
                <div className="flex justify-between items-center ">
                    <ToggleButton label="Office Tours" onToggle={handleToggle}/>
                    <h4>100%</h4> 
                </div>
                <div className="flex justify-between items-center  ">
                    <ToggleButton label="Management Introdutory" onToggle={handleToggle}/>
                    <h4>20%</h4> 
                </div>
                <div className="flex justify-between items-center">
                    <ToggleButton label="Work Tools" onToggle={handleToggle}/>
                    <h4>0%</h4> 
                </div>
                <div className="flex justify-between items-center">
                    <ToggleButton label="Meet Your Colleagues" onToggle={handleToggle}/>
                    <h4>0%</h4> 
                </div>
                <div className="flex justify-between items-center">
                    <ToggleButton label="Duties Journal" onToggle={handleToggle}/>
                    <h4>0%</h4> 
                </div>
                <div className="flex justify-between items-center">
                    <ToggleButton label="Requests Handling" onToggle={handleToggle}/>
                    <h4>0%</h4> 
                </div>
                <div className="flex justify-between items-center">
                    <ToggleButton label="Activity Tracker" onToggle={handleToggle}/>
                    <h4>0%</h4> 
                </div>
            </div>

        </div>
    );
}