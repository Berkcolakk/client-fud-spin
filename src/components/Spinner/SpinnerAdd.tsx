"use client"
import useStore from '../../store/SpinnerStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import SpinnerList from './SpinnerList';
/**
 * Author: @Berkcolakk
 * This code is a React component that allows the user to add items to a spinner wheel. It imports the SpinnerStore from the store folder, as well as FontAwesomeIcon and uuidv4 from their respective packages. It has two functions, removeItem and AddItem. The removeItem function takes in an item and filters out any items that don't match the removed item's id from the store's WheelItems array. The AddItem function checks if the WheelName is empty or if an item with the same name already exists in the WheelItems array, then creates an object with a unique id, name, and color for each item in a comma-separated list of entries. It then updates the WheelItems array with these objects. The component also contains a text input field for entering entries, a button for adding entries to the wheel, and a button for removing all entries from the wheel. Finally, it renders an unordered list of all items in the WheelItems array with buttons for removing individual items.
 */
const SpinnerAdd = () => {
    const store = useStore();
    const AddItem = (e: any) => {
        let colorArr = ["#AA5656", "#B99B6B", "#698269", "#F94A29", "#FCE22A", "#30E3DF", "#D61355"];
        if (!store.WheelName || store.WheelItems.some(item => item.name.trim() === store.WheelName.trim())) {
            return (<></>);
        }
        colorArr = colorArr.filter((color: string) => {
            return store.WheelItems.some(item => item.color === color) ? null : color
        });
        if (colorArr.length == 0) {
            return (<></>)
        }
        const isSingle = store.WheelName.indexOf(",");
        if (isSingle === -1) {
            const data = { id: uuidv4(), name: store.WheelName, color: colorArr[Math.floor(Math.random() * colorArr.length)] };
            store.updateItems([...store.WheelItems, ...[data]])
            store.setWheelName("");
            return (<></>);
        }
        let arr = [];
        for (let index = 0; index < store.WheelName.split(',').length; index++) {
            const element = store.WheelName.split(',')[index];
            const data = { id: uuidv4(), name: element.trim(), color: colorArr[Math.floor(Math.random() * colorArr.length)] };
            arr.push(data);
        }
        store.updateItems([...store.WheelItems, ...arr])
        store.setWheelName("");
    }
    const allRemove = () => {
        store.updateItems([])
        store.setSelectedItem(null);
    }
    return (
        <div className='py-4 p-4 border-l-2 border-t-2 border-b-2 border-gray-600 rounded-lg'>
            <div className='flex-auto flex'>
                <input type="text" className="block w-full p-2 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Entry 1, Entry 2" onChange={(e) => store.setWheelName(e.currentTarget.value)} required value={store.WheelName} />
                <button type="submit" className="p-4 text-white text-xs bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={AddItem}><FontAwesomeIcon icon={faCirclePlus} /></button>
            </div>
            <button className='text-white bg-red-800 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm px-2 dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-800' onClick={allRemove}><FontAwesomeIcon icon={faTrashAlt} />
            </button>
            <SpinnerList />
        </div>
    )
}
export default SpinnerAdd;