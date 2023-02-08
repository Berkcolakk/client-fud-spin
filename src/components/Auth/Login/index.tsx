"use client"
import MainTemplate from "@component/Auth/MainTemplate";
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from "yup";
import { FieldValidationMessage } from '@component/Helpers';
import Translation from '@localization/Translation';
import Link from "next/link";
import { loginUser } from "@services/UserService";
import { useRouter } from "next/navigation";
import { ILoginDTO } from "@interfaces/Users/UsersInterfaces";
import { getStorageItem, setCookieObjectHash } from '@utils/storageHash.utils';
import UseFudSpinContext from "@/context/appContext";
UseFudSpinContext
const AuthLogin = () => {
    const navigate = useRouter();
    const { lang } = Translation();
    const { UserEmail, UserPassword, SetIsAuth, SetAuthObj } = UseFudSpinContext();
    const SignupSchema = Yup.object().shape({
        Password: Yup.string()
            .max(20, lang("login.error.max.length"))
            .required(lang('login.error.password.required')),

        Email: Yup.string().email(lang('login.error.email.invalid')).required(lang('login.error.email.required'))
    });
    const formSubmitHandle = async (values: ILoginDTO,
        { setSubmitting }: FormikHelpers<ILoginDTO>) => {
        setSubmitting(false);
        const data = await loginUser(values);
        setCookieObjectHash("auth", data, 30)
        SetAuthObj(true);
        SetIsAuth(data);
        navigate.push("/")
    }
    return (
        <>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {lang("login.signin.lbl")}
            </h1>
            <Formik validationSchema={SignupSchema} initialValues={{ Email: UserEmail, Password: UserPassword }} className="space-y-4 md:space-y-6" onSubmit={formSubmitHandle}>
                {({ errors, touched }) => (
                    <Form noValidate={true}>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{lang("login.email.lbl")}</label>
                            <Field name="Email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" type="email" id="Email" />
                            {errors.Email && touched.Email ? <FieldValidationMessage Message={errors.Email} /> : null}
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{lang("login.password.lbl")}</label>
                            <Field type="password" name="Password" id="Password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {errors.Password && touched.Password ? <FieldValidationMessage Message={errors.Password} /> : null}
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label className="text-gray-500 dark:text-gray-300">{lang("login.rememberme.lbl")}</label>
                                </div>
                            </div>
                            <Link href="" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">{lang("login.password.forgot.lbl")}</Link>
                        </div>
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{lang("login.signin.lbl")}</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            {lang("login.dont.yet.account.lbl")}  <Link href="/Register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">{lang("login.signup.lbl")}</Link>
                        </p>
                    </Form>
                )}
            </Formik>
        </ >
    )
}
export default AuthLogin;