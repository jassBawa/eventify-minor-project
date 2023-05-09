import React from 'react'

import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import axios from 'axios';


function EventPage({ events }) {
    return (
        <>
            <Head>
                <title>Eventify</title>
            </Head>
            <main className='space-y-12'>
                <Navbar />
                <Events
                    events={events}
                />
            </main>

            <Footer />
        </>
    )
}

export default EventPage



export const getStaticProps = async () => {
    const eventListUrl = 'http://localhost:4040/api/user/event'
    const res = await axios.get(eventListUrl);
    const data = await res.data
    console.log(data)

    return {
        props: { events: data }
    }
}