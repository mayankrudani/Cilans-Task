import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import bcrypt from "bcryptjs";
import Eye from "../../../common/utils/eye";
import EyeOff from "../../../common/utils/eye-off";


const Login = () => {
    const [formValue, setFormValue] = useState({ contact: '', password: '' })
    const [isLoginSuccessful, setIsLoginSuccessfull] = useState<boolean>(false)
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
    const [isError, setIsError] = useState<string | undefined>('')

    const Navigate = useNavigate()

    const HandlesSubmit = async (e: any) => {
        e.preventDefault()
        setIsError('')
        const { contact, password } = formValue
        const localStorageData: any = localStorage.getItem("users") || []

        const userData = localStorageData.length ? JSON.parse(localStorageData) : localStorageData
        if (userData?.length) {
            let user: any[] = []
            for (let i = 0; i < userData.length; i++) {
                const val = userData[i]
                if (val?.contact === contact) {
                    user = [val]
                }
            }
            if (!user.length) {
                setIsError("Invalid login credential")
                return;
            }

            const isSamePassoword = bcrypt.compareSync(password, user[0].password);
            if (!isSamePassoword) {
                setIsError("Wrong password, Please enter currect password")
                return;
            }

            // for generating token simple way 
            const randomToken = function () {
                return Math.random().toString(36)
            };

            const token = (randomToken() + randomToken() + randomToken() + randomToken()).substring(2) //for remove '0'

            localStorage.setItem("token", token)
            localStorage.setItem("user_id", user[0].id)
            setIsLoginSuccessfull(true)
            setTimeout(() => {
                setIsLoginSuccessfull(false)
                Navigate("/")
            }, 1200);

        } else {
            alert("Pleases Create a new account")
        }
    }

    return (
        <section className="bg-[#F1F1F1] relative">
            <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto lg:py-20">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Login
                        </h1>
                        <form className="space-y-4 md:space-y-8" onSubmit={HandlesSubmit}>

                            <div>
                                <label htmlFor="contact" className="block mb-1 text-sm font-medium text-gray-900">Contact No</label>
                                <input
                                    type="number"
                                    name="contact"
                                    id="conact"
                                    max={9999999999}
                                    value={formValue.contact}
                                    onChange={(e) => setFormValue({ ...formValue, [e.target.name]: e.target.value })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="1234567890" required />

                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-1 text-sm font-medium text-gray-900">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={isShowPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        value={formValue.password}
                                        onChange={(e) => setFormValue({ ...formValue, [e.target.name]: e.target.value })}
                                        placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                                    <div onClick={() => setIsShowPassword(!isShowPassword)}
                                        className="absolute top-3.5 right-4">
                                        {isShowPassword ? <EyeOff /> : <Eye />}
                                    </div>
                                </div>
                            </div>

                            {
                                isError &&
                                <div className="bg-red-700 text-white px-5 py-3 rounded">
                                    {isError}
                                </div>
                            }
                            {
                                isLoginSuccessful &&
                                <div className="bg-green-700 text-white px-5 py-3 rounded">
                                    Login successfull
                                </div>
                            }
                            <button
                                type="submit"
                                className="w-full text-black bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Login
                            </button>

                            <p className="text-sm font-light text-gray-900">
                                Create new account?
                                <Link to={"/create-account"} className="font-medium text-primary-600 hover:underline">
                                    {" "}Sign in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;