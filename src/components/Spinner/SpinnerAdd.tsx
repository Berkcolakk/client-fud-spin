"use client"
import UseFudSpinContext from "@/context/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import SpinnerList from './SpinnerList';
/**
 * Author: @Berkcolakk
 * This code is a React component that allows the user to add items to a spinner wheel. It imports the SpinnerStore from the store folder, as well as FontAwesomeIcon and uuidv4 from their respective packages. It has two functions, removeItem and AddItem. The removeItem function takes in an item and filters out any items that don't match the removed item's id from the store's WheelItems array. The AddItem function checks if the WheelName is empty or if an item with the same name already exists in the WheelItems array, then creates an object with a unique id, name, and color for each item in a comma-separated list of entries. It then updates the WheelItems array with these objects. The component also contains a text input field for entering entries, a button for adding entries to the wheel, and a button for removing all entries from the wheel. Finally, it renders an unordered list of all items in the WheelItems array with buttons for removing individual items.
 */
const SpinnerAdd = () => {
    const { Spinners, SetSpinners, SpinnerWheelName, SetSpinnerWheelName, SetSpinnerSelectedItem } = UseFudSpinContext();
    const AddItem = (e: any) => {
        let colorArr = ["#AA5656", "#B99B6B", "#698269", "#F94A29", "#FCE22A", "#30E3DF", "#D61355"];
        if (!SpinnerWheelName || Spinners.some(item => item.name.trim() === SpinnerWheelName.trim())) {
            return;
        }
        colorArr = colorArr.filter((color: string) => {
            return Spinners.some(item => item.color === color) ? null : color
        });
        if (colorArr.length == 0) {
            return;
        }
        const isSingle = SpinnerWheelName.indexOf(",");
        if (isSingle === -1) {
            const data = { id: uuidv4(), name: SpinnerWheelName, color: colorArr[Math.floor(Math.random() * colorArr.length)] };
            SetSpinners([...Spinners, ...[data]])
            SetSpinnerWheelName("")
            return;
        }
        let arr = [];
        for (let index = 0; index < SpinnerWheelName.split(',').length; index++) {
            const element = SpinnerWheelName.split(',')[index];
            const data = { id: uuidv4(), name: element.trim(), color: colorArr[Math.floor(Math.random() * colorArr.length)] };
            arr.push(data);
        }
        SetSpinners([...Spinners, ...arr])
        SetSpinnerWheelName("")
    }
    const allRemove = () => {
        SetSpinners([])
        SetSpinnerSelectedItem(null);
    }
    return (
        <div className='py-4 p-4 border border-gray-200 rounded-lg  dark:bg-gray-900 dark:border-gray-700 w-full self-start'>
            <div className='flex-auto flex'>
                <input type="text" className="block w-full p-2 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Entry 1, Entry 2" onChange={(e) => SetSpinnerWheelName(e.currentTarget.value)} required value={SpinnerWheelName} />
                <button type="submit" className="p-4 text-white text-xs bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none rounded-xl focus:ring-blue-300 font-medium px-2 py-1 dark:bg-primaryColor dark:hover:bg-primary-600 dark:focus:ring-blue-800" onClick={AddItem}>Add Item</button>
            </div>
            <button className='text-white bg-red-800 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm px-2 dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-800' onClick={allRemove}>Delete all
            </button>
            <SpinnerList />
        </div>
    )
}
export default SpinnerAdd;