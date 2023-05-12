import React, { useState } from 'react'
import FormInput from './FormInput'
import { registerEvent } from '@/services/api';
import { toast } from 'react-hot-toast';

function RegisterForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [year, setYear] = useState('');
    const [branch, setBranch] = useState('');
    const [section, setSection] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { name, email, phone: +phone, year, branch, section }
        const res = await registerEvent(data);

        if (res) {
            toast.success('Registered Successfully!')
            alert('Registered Successfully')
        }
    }

    return (

        <form action="" onSubmit={handleSubmit}>
            <div className=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 className="text-indigo-900 text-xl uppercase   font-medium title-font">
                    Register Now
                </h2>
                <p className="leading-relaxed mb-5 text-gray-600">
                    Please fill the form below to register for the event
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                        <label for="name" className="leading-7 text-sm text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            required
                            id="name"
                            name="name"
                            placeholder={'John Doe'}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative">
                        <label for="email" className="leading-7 text-sm text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            id="email"
                            name="email"
                            placeholder={'johndoe@gmail.com'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative">
                        <label for="phone" className="leading-7 text-sm text-gray-600">
                            Phone

                        </label>
                        <input
                            type="text"
                            required
                            id='phone'
                            name='phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="980879-XXXX"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative">
                        <label for="year" className="leading-7 text-sm text-gray-600">
                            Year

                        </label>
                        <input
                            type="text"
                            required
                            id='year'
                            name='year'
                            placeholder="2nd"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative">
                        <label for="branch" className="leading-7 text-sm text-gray-600">
                            Branch

                        </label>
                        <input
                            type="text"
                            required
                            id='branch'
                            name='branch'
                            value={branch}
                            onChange={(e) => setBranch(e.target.value)}
                            placeholder="CSE"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative">
                        <label for="section" className="leading-7 text-sm text-gray-600">
                            Section

                        </label>
                        <input
                            type="text"
                            required
                            id='section'
                            name='section'
                            placeholder="CSB1"
                            value={section}
                            onChange={(e) => setSection(e.target.value)}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                    By filling out this form and clicking submit you acknowledge our
                    privacy policy
                </p>
                <button
                    type="submit"
                    className="text-white mt-6 uppercase py-4 bg-indigo-500 border-0 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                    Register
                </button>
            </div>
        </form>
    )
}

export default RegisterForm
