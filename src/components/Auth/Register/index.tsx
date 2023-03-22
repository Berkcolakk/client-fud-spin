"use client"
import { registerUser } from '@services/UserService'
import React from "react";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from "yup";
import UseFudSpinContext from "@/context/appContext";
import Translation from '@localization/Translation';
import { IRegisterDTO } from "@interfaces/Users/UsersInterfaces";
import { FieldValidationMessage } from '@component/Helpers';
import Button from '@component/Helpers/Button';

const AuthRegister = () => {
    const { Name, SetName, Surname, SetSurname, UserEmail, SetEmail, SetUserPassword, UserPassword, PhoneNumber, SetPhoneNumber, Gender, SetGender, DateOfBirth, SetDateOfBirth } = UseFudSpinContext();
    const { lang } = Translation();
    const SignupSchema = Yup.object().shape({
        // UserPassword: Yup.string()
        //     .max(20, lang("login.error.max.length"))
        //     .required(lang('login.error.password.required')),

        //     UserEmail: Yup.string().email(lang('login.error.email.invalid')).required(lang('login.error.email.required'))
    });
    const formSubmitHandle = async (values: IRegisterDTO,
        { setSubmitting }: FormikHelpers<IRegisterDTO>) => {
        setSubmitting(false);
        debugger;
        values.DateOfBirth = DateOfBirth;
       const data = await registerUser(values);
    }
    const CustomInputComponent = (props: any) => (
        <Datetime onChange={(e: any) => { SetDateOfBirth(e.format("DD/MM/yyyy")) }} closeOnSelect={true} inputProps={{
            id: 'DateOfBirth',
            name: 'DateOfBirth', className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        }} locale="" timeFormat={false} />
    );
    return (
        <>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {lang("signup.header.lbl")}
            </h1>
            <Formik validationSchema={SignupSchema} initialValues={{ UserEmail: UserEmail, UserPassword: UserPassword, DateOfBirth: DateOfBirth, Gender: Gender, Name: Name, PhoneNumber: PhoneNumber, Surname: Surname }} className="space-y-4 md:space-y-6" onSubmit={formSubmitHandle}>
                {({ errors, touched }) => (
                    <Form noValidate={true}>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{lang("signup.name.lbl")}</label>
                                    <Field type="text" name="Name" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jane" />
                                    {errors.Name && touched.Name ? <FieldValidationMessage Message={errors.Name} /> : null}
                                </div>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{lang("signup.surname.lbl")}</label>
                                    <Field type="text" name="Surname" id="Surname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Smith" />
                                    {errors.Surname && touched.Surname ? <FieldValidationMessage Message={errors.Surname} /> : null}
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{lang("signup.email.lbl")}</label>
                            <Field type="email" name="UserEmail" id="UserEmail" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                            {errors.UserEmail && touched.UserEmail ? <FieldValidationMessage Message={errors.UserEmail} /> : null}
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{lang("signup.password.lbl")}</label>
                            <Field type="Password" name="UserPassword" id="UserPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {errors.UserPassword && touched.UserPassword ? <FieldValidationMessage Message={errors.UserPassword} /> : null}
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{lang("signup.phonenumber.lbl")}</label>
                            <Field type="text" name="PhoneNumber" id="PhoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0001112233" />
                            {errors.PhoneNumber && touched.PhoneNumber ? <FieldValidationMessage Message={errors.PhoneNumber} /> : null}
                        </div>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{lang("signup.gender.lbl")}</label>
                                <Field as={"select"}
                                    id="Gender"
                                    name="Gender"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value={1}>Kadın</option>
                                    <option value={2}>Erkek</option>
                                </Field>
                                {errors.Gender && touched.Gender ? <FieldValidationMessage Message={errors.Gender} /> : null}
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{lang("signup.dateofbirth.lbl")}</label>
                                <Field name="DateOfBirth" id="DateOfBirth" as={CustomInputComponent} placeholder="01/01/1960" />
                                {errors.DateOfBirth && touched.DateOfBirth ? <FieldValidationMessage Message={errors.DateOfBirth} /> : null}
                            </div>
                        </div>
                        <br />
                        <Button ClassName="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" Name="signup.lbl" Type={"submit"} />
                    </Form>
                )}
            </Formik>
        </ >
    )
}

export default AuthRegister;