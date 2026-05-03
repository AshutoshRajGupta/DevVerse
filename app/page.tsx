import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import {IEvent} from "@/database"
import {cacheLife} from "next/cache";
import events from "@/lib/constants"

const BASE_URL=process.env.NEXT_PUBLIC_BASE_URL;

export default async function  Home () {
  'use cache';
  cacheLife('hours')
  const response= await fetch(`${BASE_URL}/api/events`);
  const {events}=await response.json();


  return (
    <section>
      <h1 className='text-center mt-4'>DevVerse - The Hub for Every Dev <br /> Events You cannot Miss!!</h1>
        <p className='text-center mt-5'> Hackathons, Meetups, and Conferences All in One Place</p>
        <ExploreBtn />
        <div className='mt-20 space-y-7'>
          <h3>Featured Events</h3>
          <ul className='events'>
            {events && events.length>0 && events.map((event: IEvent)=>(
                <li className='list-none' key={event.title}>
                  <EventCard  {...event} />
                </li>
            ))}
          </ul>
        </div>
    </section>
  );
}
