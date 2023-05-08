import AboutHero from '@/components/AboutHero'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'

function AboutUs() {
    return (
        <>
            <Head>
                <title>Eventify</title>
            </Head>
            <main>
                <Navbar />
                <AboutHero />

            </main>

            <Footer />
        </>
    )
}

export default AboutUs
