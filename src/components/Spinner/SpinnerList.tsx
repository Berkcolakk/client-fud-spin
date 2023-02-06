import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UseFudSpinContext from "@/context/appContext";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const SpinnerList = () => {
    const {Spinners,SetSpinners,SetSpinnerSelectedItem} = UseFudSpinContext();
    const removeItem = (removedItem: string) => {
        SetSpinners(Spinners.filter((item) => { return item.id !== removedItem }));
        SetSpinnerSelectedItem(null);
    }
    return (
        <>
            <div className="w-32 overflow-visible  max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 overflow-scroll">
                        {Spinners.map((item) => (
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