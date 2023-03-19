"use client"
import { useEffect, useState, Fragment } from 'react';
import { spinnerLog } from '@services/SpinnerService';
import { IWheel } from '@interfaces/Wheels/WheelsInterfaces';
import { getStorageItem } from '@utils/storageHash.utils';
import UseFudSpinContext from "@/context/appContext";
import Modal from '@component/Helpers/Modal';
import useTranslation from "@localization/Translation";
const SpinnerWheel = () => {
    const { Spinners, SetSpinners, SetSpinnerSelectedItem, SpinnerSelectedItem } = UseFudSpinContext();
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [modalContent,setModalContent] = useState<string>("");
    const { lang } = useTranslation();
    
    // const themeColor = localStorage.getItem("theme") == "dark" ? "#A27B5C" : "#E1D7C6"
    const spinning = SpinnerSelectedItem !== null ? "spinning" : "";
    const wheelVars = {
        "--all-item-count": Spinners.length,
        "--selected-pie": SpinnerSelectedItem,
        // "--wheel-color":themeColor
    };
    const SelectedHandle = async () => {
        if (Spinners.length < parseInt(process.env.NEXT_PUBLIC_MIN_WHEEL_COUNT || "6")) {
            alert("Items'lar 6 veya daha fazla olmalıdır.")
            return;
        }
        if (SpinnerSelectedItem === null) {
            const random = Math.floor(Math.random() * Spinners.length);
            SetSpinnerSelectedItem(random);
            const spinner = { spinnerList: Spinners, selectedPie: Spinners[random] }
            const data = await spinnerLog(spinner);
            setTimeout(() => {
                setModalIsOpen(true)
                setModalContent(lang("wheel.content.congrats.lbl").replace("{wheelName}", Spinners[SpinnerSelectedItem]?.name))
            }, 3000);
        } else {
            SetSpinnerSelectedItem(null);
        }
    }
    const modalCloseHandle = () => {
        setModalIsOpen(false);
        SetSpinnerSelectedItem(null);
    }
    /* eslint-disable */
    return (
        <div className='WheelDiv lg:flex sm:block items-start justify-center px-4 p-4 w-full bg-white border border-gray-200 rounded-lg  dark:bg-gray-900 dark:border-gray-700 place-content-center' >
            <div className="block relative box-content select-none wheel-container bg-white rounded-2/4 p-c-3 border-4 border-solid border-primaryColor">
                <div className='absolute text-gray-800 dark:text-white '>
                    <Modal Title={""} Content={modalContent} IsShow={modalIsOpen} CloseHandle={modalCloseHandle} />
                </div>
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