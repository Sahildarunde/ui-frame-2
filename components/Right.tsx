import DateInputBox from "./DateInputBox";
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
            <div className='md:ml-16 mt-8'>
                <h2 className='text-slate-500 m-4 font-semibold '>ONBOARDING</h2>
                <div className="flex flex-col gap-8  p-5">
                    <DateInputBox label="Starts On" placeholder="21/05/2024"/>

                    <ToggleButton label="Onboarding Required" onToggle={handleToggle}/>

                    <div >
                        
                         <span className="text-lg   font-lg text-gray-700 mt-5 mb-5">Current Status</span>
                        <div className="flex justify-center items-center gap-5"> 
                            <div className="p-2 rounded-lg bg-slate-200 w-28">Onboarding</div>
                        
                            <PercentageSlider onChange={handlePercentageChange}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}