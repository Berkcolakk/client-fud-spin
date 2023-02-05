"use client"
import { useEffect, useState } from 'react';
import { spinnerLog } from '@services/index';
import { IWheel } from '@interfaces/Wheels/WheelsInterfaces';
import { getStorageItem } from '@utils/storageHash.utils';
import UseFudSpinContext from "@/context/appContext";
const SpinnerWheel = () => {
    const { Spinners, SetSpinners, SetSpinnerSelectedItem, SpinnerSelectedItem } = UseFudSpinContext();

    // const themeColor = localStorage.getItem("theme") == "dark" ? "#A27B5C" : "#E1D7C6"
    const spinning = SpinnerSelectedItem !== null ? "spinning" : "";
    const wheelVars = {
        "--all-item-count": Spinners.length,
        "--selected-pie": SpinnerSelectedItem,
        // "--wheel-color":themeColor
    };
    const SelectedHandle = async () => {
        if (SpinnerSelectedItem === null) {
            const random = Math.floor(Math.random() * Spinners.length);
            SetSpinnerSelectedItem(random);
            const spinner = { spinnerList: Spinners, selectedPie: Spinners[random] }
            const data = await spinnerLog(spinner);
        } else {
            SetSpinnerSelectedItem(null);
        }
    }
    /* eslint-disable */
    return (
        <div className='lg:flex sm:block items-start justify-center p-2 px-2 border-2 border-gray-600 rounded-lg'>
            <div className="block relative box-content select-none wheel-container bg-white rounded-2/4 p-c-3 border-4 border-solid border-primaryColor">
                <div className={`block relative box-content overflow-hidden cursor-pointer dark:bg-primaryColor bg-slate-300 wheel rounded-2/4 border-solid border-border-5 border-primaryColor ${spinning}`} style={wheelVars} onClick={SelectedHandle}>
                    {Spinners.map((item, index) => (

                        <div className="block absolute box-border text-right wheel-item px-6 top-2/4 left-2/4 w-2/4 text-white" key={index} style={{ "--pie": index, "--pie-color": item.color }}>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default SpinnerWheel;