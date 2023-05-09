import { createEvent } from '@/services/api';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

function EventModal({ showModal, setShowModal }) {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [eventVenue, setEventVenue] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };

    const handleCreateEvent = async (e) => {
        e.preventDefault();
        setIsSubmitting(true)

        const res = await createEvent({
            eventName,
            description,
            image: imageUrl,
            date: eventDate,
            time: eventTime,
            venue: eventVenue
        })

        if (res.message) {
            toast.success('Logged In')
            localStorage.setItem('accessToken', res.token);

            toast.success('Event added')
            closeModal();
        }


        // Call API to create event here
        setIsSubmitting(false)

        closeModal();
    };
    return (
        <>

            {
                showModal ? (
                    <div id="create-event-modal" className="modal z-10 fixed w-full h-full top-0 left-0 flex items-center justify-center">
                        <div onClick={closeModal} className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

                        <div className="modal-container bg-white md:max-w-3xl mx-auto rounded shadow-lg z-50 overflow-y-auto">
                            <div className="modal-content py-4 text-left px-6">
                                <div className="headings py-4">
                                    <h2 className='text-2xl '>Create Your Event</h2>
                                    <p className='text-sm mt-4 text-gray-400'>Description: "Easily create your next event using our form. Fill in all the details you need, from the name to the date, time, venue, rules, and image text. Let's make your event unforgettable!"</p>
                                </div>
                                <form className='grid grid-cols-2 mt-8 gap-4'>
                                    <div className="">

                                        <label className="block font-semibold mb-2" for="event-name">Event Name:</label>
                                        <input className="w-full border rounded py-2 px-3 mb-3" type="text" id="event-name" name="event-name" required onChange={(e) => setEventName(e.target.value)} />
                                    </div>

                                    <div className="">

                                        <label className="block font-semibold mb-2" for="event-date">Date:</label>
                                        <input className="w-full border rounded py-2 px-3 mb-3" type="date" id="event-date" name="event-date" required onChange={(e) => setEventDate(e.target.value)} />
                                    </div>
                                    <div>

                                        <label className="block font-semibold mb-2" for="event-time">Time:</label>
                                        <input className="w-full border rounded py-2 px-3 mb-3" type="time" id="event-time" name="event-time" required onChange={(e) => setEventTime(e.target.value)} />
                                    </div>
                                    <div>

                                        <label className="block font-semibold mb-2" for="event-venue">Venue:</label>
                                        <input className="w-full border rounded py-2 px-3 mb-3" type="text" id="event-venue" name="event-venue" required onChange={(e) => setEventVenue(e.target.value)} />
                                    </div>

                                    <div className='col-span-2'>

                                        <label className="block font-semibold mb-2" for="event-image">Image Url:</label>
                                        <input className="w-full border rounded py-2 px-3 mb-3" type="text" id="event-image" name="event-image" required onChange={(e) => setImageUrl(e.target.value)} />
                                    </div>
                                    <div className='col-span-2'>

                                        <label className="block font-semibold mb-2" for="event-rules">Description:</label>
                                        <textarea rows={4} className="w-full border rounded py-2 px-3 mb-3" id="event-rules" name="event-rules" required onChange={(e) => setDescription(e.target.value)} ></textarea>
                                    </div>
                                    <div className="flex justify-center col-span-2 text-center pt-2">
                                        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCreateEvent} disabled={isSubmitting} >
                                            {
                                                isSubmitting ? "Submitting..." : "Create"
                                            }
                                        </button>
                                        <button type="button" className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-2" onClick={closeModal}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                ) : null
            }





        </>
    )
}

export default EventModal
