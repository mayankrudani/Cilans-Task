import { useState } from "react";
import { Link } from "react-router-dom";
import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
    const [formValue, setFormValue] = useState({ name: '', email: '', contact: '', password: '', confirmPassword: '' })
    const [isSuccess, setIsSuccess] = useState<boolean>(false)


    const Navigate = useNavigate()

    const HandlesSubmit = async (e: any) => {
        e.preventDefault()
        const { name, contact, email, password, confirmPassword } = formValue

        const localStorageData: any = localStorage.getItem("users") || []

        const userData = localStorageData.length ? JSON.parse(localStorageData) : localStorageData
        console.log("user data is ", userData)
        // check same contact numberr is not present
        if (userData?.length) {
            let isContact = false
            for (let i = 0; i < userData.length; i++) {
                const val = userData[i]
                if (val?.contact === contact) {
                    isContact = true
                }
            }
            if (isContact) {
                alert("this Contact is already present")
                return;
            }
        }

        // checck both password is sames
        if (!(password === confirmPassword)) {
            alert("Please add same password")
            return;
        }

        const HashPassowrd = bcrypt.hashSync(password, 10)
        const user_id = uuidv4()
        localStorage.setItem("users", JSON.stringify(
            [
                ...userData,
                { id: user_id, name: name, email: email, contact: contact, password: HashPassowrd }
            ])
        )

        setFormValue({ name: '', email: '', contact: '', password: '', confirmPassword: '' })
        setIsSuccess(true)

        setTimeout(() => {
            setIsSuccess(false)
            Navigate("/login")
        }, 1200);

    }

    return (
        <section className="bg-[#F1F1F1]">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Create An Account
                        </h1>   
                        <form className="space-y-4 md:space-y-4" onSubmit={HandlesSubmit}>
                            <div className="grid grid-cols-2 gap-x-3">
                                <div>
                                    <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-900">Name</label>
                                    <input type="text"
                                        name="name"
                                        id="name"
                                        value={formValue.name}
                                        onChange={(e) => setFormValue({ ...formValue, [e.target.name]: e.target.value })}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Joy" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formValue.email}
                                        onChange={(e) => setFormValue({ ...formValue, [e.target.name]: e.target.value })}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                                </div>
                            </div>
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
                                <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formValue.password}
                                    onChange={(e) => setFormValue({ ...formValue, [e.target.name]: e.target.value })}
                                    placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirm-password"
                                    value={formValue.confirmPassword}
                                    onChange={(e) => setFormValue({ ...formValue, [e.target.name]: e.target.value })}
                                    placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <span className="font-medium text-primary-600 hover:underline">Terms and Conditions</span></label>
                                </div>
                            </div>
                            {
                                isSuccess &&
                                <div className="bg-green-700 text-white px-5 py-3 rounded">
                                    Customer Create Successfully
                                </div>
                            }
                            <button type="submit" className="w-full text-black bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account?
                                <Link to={"/login"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Login here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreateAccount;