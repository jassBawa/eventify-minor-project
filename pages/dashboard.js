import EventModal from '@/components/Modal';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'

function Dashboard({ list = [1, 1, 1, 1, 1] }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Head>

            </Head>
            <div className="bg-gray-100 h-full">

                <Navbar />

                <main className='h-full bg-gray-100' >

                    <EventModal showModal={showModal} setShowModal={setShowModal} />

                    <div className="container mx-auto py-6 px-4 mt-8">
                        <div className="py-6">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">Event Management Dashboard</h1>
                            <p className="text-gray-400 w-3/4">Welcome to the event management dashboard! From here, you can view and manage all of your events, attendees, and other important information.</p>
                        </div>

                        <div className="flex justify-between items-center mt-8">
                            <div className="w-1/2">
                                <input type="text" className="w-full border px-4 py-2 rounded-lg" placeholder="Search..." />
                            </div>
                            <div className="w-1/2 text-right">
                                <button onClick={() => setShowModal(true)} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Create</button>
                            </div>
                        </div>
                        <div className="mt-8">
                            <div className="shadow overflow-hidden rounded-lg border-b border-gray-200">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {
                                            list.map((item, _i) => {
                                                return (
                                                    <tr key={_i}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 h-10 w-10">
                                                                    <img className="h-10 w-10 rounded-full" src="https://via.placeholder.com/150" alt="" />
                                                                </div>
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900">John Doe</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-500">johndoe@example.com</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                Active
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium ">
                                                            <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-8">Edit</a>
                                                            <a href="#" className="text-red-600 hover:text-red-900 ml-2">Delete</a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </main>
            </div>


        </>
    )
}

export default Dashboard;


export const getStaticProps = async () => {
    // const token = localStorage.getItem('accessToken');
    // const eventListUrl = 'http://localhost:4040/api/user/event'
    // const res = await axios.get(eventListUrl);
    // const data = await res.data
    const data = []

    return {
        props: { events: data }
    }
}