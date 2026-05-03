
'use server';

import Booking from '@/database/booking.model';
import Event from '@/database/event.model';
import connectDB from "@/lib/mongodb";
import { sendBookingEmail } from "@/lib/email";

export const createBooking = async ({eventId, slug, email,}: {
    eventId: string;
    slug: string;
    email: string;
}) => {
    try {
        await connectDB();

        // ✅ Validate email
        if (!email || !email.includes("@")) {
            return { success: false, message: "Invalid email" };
        }

        // ✅ Check duplicate booking
        const existing = await Booking.findOne({ eventId, email });
        if (existing) {
            return {
                success: false,
                message: "You have already registered for this event",
            };
        }

        // ✅ Fetch event details
        const event = await Event.findById(eventId);

        if (!event) {
            return { success: false, message: "Event not found" };
        }

        // ✅ Save booking
        await Booking.create({
            eventId,
            slug,
            email,
        });

        // ✅ Send email (non-blocking for better performance)
        sendBookingEmail(email, {
            title: event.title,
            date: event.date,
            location: event.location,
            description: event.description,
            slug: event.slug,
        });

        return { success: true };

    } catch (e) {
        console.error('create booking failed', e);
        return { success: false, message: "Something went wrong" };
    }
};