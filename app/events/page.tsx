import React from "react";
import {IEvent} from "@/database";
import EventCard from "@/components/EventCard";
import {cacheLife} from "next/cache";
const BASE_URL=process.env.NEXT_PUBLIC_BASE_URL;


const EventsPage = async () => {
    'use cache';
    cacheLife('hours')
    const response= await fetch(`${BASE_URL}/api/events`);
    const {events}=await response.json();
    return (
        <section className="min-h-screen text-white px-6 md:px-16 py-16">
            <h1 className="text-3xl font-bold mb-6">All Events</h1>

            {/* You can reuse your EventCard component here */}
            <p className="text-gray-400">
                Explore all upcoming hackathons, meetups, and conferences.
            </p>
            <h3>Featured Events</h3>
            <ul className='events'>
                {events && events.length>0 && events.map((event: IEvent)=>(
                    <li className='list-none' key={event.title}>
                        <EventCard  {...event} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default EventsPage;