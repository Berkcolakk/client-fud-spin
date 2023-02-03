import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStore from '../../store/SpinnerStore';
import { faTrashAlt, faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import CardBody from './Card/CardBody';
import Image from 'next/image';

const SpinnerList = () => {
    const store = useStore();
    const removeItem = (removedItem: number) => {
        store.updateItems(store.WheelItems.filter((item) => { return item.id !== removedItem }));
    }
    return (
        <>
            <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 overflow-scroll">
                        {store.WheelItems.map((item) => (
                            <li key={item.id} className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {item.name}
                                        </p>
                                    </div>
                                    <button className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white" onClick={() => removeItem(item.id)}>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                </div>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </>
    )
}
export default SpinnerList;