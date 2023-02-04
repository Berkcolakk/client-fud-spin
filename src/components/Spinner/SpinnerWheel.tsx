"use client"

import SpinnerStore from '@stores/SpinnerStore';
import { useEffect, useState } from 'react';
import { spinnerLog } from '@services/index';
import { LoadingBox } from '../Helpers';
import { IWheel } from '@interfaces/Wheels/WheelsInterfaces';
interface IProps {
    Wheels: Array<IWheel>
}
const SpinnerWheel = ({ Wheels }: IProps) => {
    const [loading, setLoading] = useState(true);
    const store = SpinnerStore();
    useEffect(() => {
        store.updateItems(Wheels);
        setLoading(false);
    }, [])
    // const themeColor = localStorage.getItem("theme") == "dark" ? "#A27B5C" : "#E1D7C6"
    const spinning = store.SelectedItem !== null ? "spinning" : "";
    const wheelVars = {
        "--all-item-count": store.WheelItems.length,
        "--selected-pie": store.SelectedItem,
        // "--wheel-color":themeColor
    };
    const SelectedHandle = async () => {
        if (store.SelectedItem === null) {
            const random = Math.floor(Math.random() * store.WheelItems.length);
            store.setSelectedItem(random);
            const spinner = { spinnerList: store.WheelItems, selectedPie: store.WheelItems[random] }
            const data = await spinnerLog(spinner);
        } else {
            store.setSelectedItem(null);
        }
    }
    if (loading) {
        return (<LoadingBox isLoading={loading} />);
    }
    /* eslint-disable */
    return (
        <div className='lg:flex sm:block items-start justify-center p-2 px-2 border-2 border-gray-600 rounded-lg'>
            <div className="block relative box-content select-none wheel-container bg-white rounded-2/4 p-c-3 border-4 border-solid border-primaryColor">
                <div className={`block relative box-content overflow-hidden cursor-pointer dark:bg-primaryColor bg-slate-300 wheel rounded-2/4 border-solid border-border-5 border-primaryColor ${spinning}`} style={wheelVars} onClick={SelectedHandle}>
                    {store.WheelItems.map((item, index) => (

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