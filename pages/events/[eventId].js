import Navbar from '@/components/Navbar'
import SingleEventDetails from '@/components/SingleEventDetails'
import SingleEventHero from '@/components/SingleEventHero'
import { getUserEvent } from '@/services/api'
import React from 'react'

function EventPage({ event }) {
    const { image } = event;
    return (
        <div>
            <Navbar />
            <main className="bg-gray-900 h-full">
                <SingleEventHero image={image} />
                <SingleEventDetails event={event} />
            </main>
        </div>
    )
}



export default EventPage


export const getServerSideProps = async ({ params }) => {
    const { eventId } = params

    const data = await getUserEvent(eventId);

    return {
        props: {
            event: data
        }
    }


}