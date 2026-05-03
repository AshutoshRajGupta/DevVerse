import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type EventDetails = {
    title: string;
    date?: string;
    location?: string;
    description?: string;
    slug: string;
};

export const sendBookingEmail = async (
    email: string,
    event: EventDetails
) => {
    try {
        const formattedDate = event.date
            ? new Date(event.date).toDateString()
            : "TBA";

        await resend.emails.send({
            from: "DevVerse <onboarding@resend.dev>",
            to: email,
            subject: `🎉 You're Registered for ${event.title}!`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; padding:20px;">
          
          <h2>🚀 Registration Confirmed!</h2>

          <p>You’ve successfully registered for:</p>
          <h2 style="color:#4f46e5;">${event.title}</h2>

          <hr style="margin:20px 0;" />

          <p><strong>📅 Date:</strong> ${formattedDate}</p>
          <p><strong>📍 Location:</strong> ${event.location || "Online"}</p>

          ${
                event.description
                    ? `<p><strong>📝 About:</strong> ${event.description}</p>`
                    : ""
            }

          <br/>

          <a 
            href="${process.env.NEXT_PUBLIC_BASE_URL}/events/${event.slug}" 
            style="
              display:inline-block;
              padding:12px 18px;
              background:#4f46e5;
              color:white;
              text-decoration:none;
              border-radius:8px;
              font-weight:bold;
            "
          >
            View Event
          </a>

          <br/><br/>

          <p>We’ll keep you updated with all event details.</p>

          <p style="margin-top:30px;">– Team DevVerse 🚀</p>
        </div>
      `,
        });

    } catch (error) {
        console.error("Email sending failed:", error);
    }
};