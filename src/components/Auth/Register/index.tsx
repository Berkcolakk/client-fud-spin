import { MainTemplate } from "@component/Auth/MainTemplate";
import AuthStore from '@stores/AuthStore';
import { registerUser } from '@services/index'
import React from "react";
import Datetime from 'react-datetime';
import { IUser } from "@interfaces/Users/UsersInterfaces";

export const Register = () => {
    const store = AuthStore();
    const submitHandle = async (e: any) => {
        e.preventDefault();
        const user: IUser = {
            Name: store.Name,
            Surname: store.Surname,
            Email: store.Email,
            Password: store.Password,
            DateOfBirth: store.DateOfBirth,
            Gender: store.Gender,
            PhoneNumber: store.PhoneNumber
        };
        const data = await registerUser(user);
    }
    return (
        <MainTemplate>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitHandle} noValidate={true}>
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input value={store.Name} onChange={(e) => store.setName(e.currentTarget.value)} type="email" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jane" />
                        </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surname</label>
                            <input onChange={(e) => store.setSurname(e.currentTarget.value)} value={store.Surname} type="email" name="surname" id="surname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Smith" />
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input onChange={(e) => store.setEmail(e.currentTarget.value)} value={store.Email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input onChange={(e) => store.setPassword(e.currentTarget.value)} value={store.Password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                    <input onChange={(e) => store.setPhoneNumber(e.currentTarget.value)} value={store.PhoneNumber} type="email" name="phoneNumber" id="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0001112233" />
                </div>
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                        <select
                            value={store.Gender}
                            id="gender"
                            onChange={(e) => store.setGender(parseInt(e.currentTarget.value))}
                            name="gender"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value={1}>Kadın</option>
                            <option value={2}>Erkek</option>
                        </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of birth</label>
                        <Datetime value={store.DateOfBirth} onChange={(e) => store.setDateOfBirth(e.toString())} inputProps={{ className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" }} locale="" timeFormat={false} />
                    </div>
                </div>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
            </form>
        </MainTemplate >
    )
}