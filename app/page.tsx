// import ExploreBtn from "@/components/ExploreBtn";
//
//
// export default async function  Home () {
//
//
//
//   return (
//     <section>
//       <h1 className='text-center mt-4'>DevVerse - The Hub for Every Dev <br /> Events You cannot Miss!!</h1>
//         <p className='text-center mt-5'> Hackathons, Meetups, and Conferences All in One Place</p>
//         <ExploreBtn />
//         <div className='mt-20 space-y-7'>
//
//         </div>
//     </section>
//   );
// }
import ExploreBtn from "@/components/ExploreBtn";
import Image from "next/image";

export default async function Home() {
  return (
      <section className="text-white px-6 md:px-16 py-10">

        {/* Hero */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            DevVerse - The Hub for Every Dev <br /> Events You Cannot Miss!!
          </h1>

          <p className="text-gray-400 mt-5">
            Hackathons, Meetups, and Conferences — All in One Place
          </p>

          <div className="mt-6">
            <ExploreBtn />
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-20 space-y-20">

          {/* 🔥 Event Categories */}
          <div>
            <h2 className="text-2xl font-semibold text-center mb-10">
              🚀 Explore Event Types
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              {/* Hackathons */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition">
                <div className="relative h-40 w-full">
                  <Image
                      src="/images/hackathon.jpg"
                      alt="Hackathons"
                      fill
                      className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Hackathons</h3>
                  <p className="text-gray-400 text-sm">
                    Build, innovate, and compete in exciting coding challenges.
                  </p>
                </div>
              </div>

              {/* Meetups */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition">
                <div className="relative h-40 w-full">
                  <Image
                      src="/images/meetup.jpg"
                      alt="Meetups"
                      fill
                      className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Meetups</h3>
                  <p className="text-gray-400 text-sm">
                    Connect with developers and grow your network.
                  </p>
                </div>
              </div>

              {/* Conferences */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition">
                <div className="relative h-40 w-full">
                  <Image
                      src="/images/conference.jpg"
                      alt="Conferences"
                      fill
                      className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Conferences</h3>
                  <p className="text-gray-400 text-sm">
                    Learn from industry experts and stay ahead in tech.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ⚡ How It Works */}
          <div>
            <h2 className="text-2xl font-semibold text-center mb-10">
              ⚡ How DevVerse Works
            </h2>

            <div className="grid md:grid-cols-4 gap-6 text-center">

              {/* Step 1 */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <h3 className="font-semibold mb-2">1️⃣ Visit Platform</h3>
                <p className="text-gray-400 text-sm">
                  Explore DevVerse to discover trending developer events.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <h3 className="font-semibold mb-2">2️⃣ Browse Events</h3>
                <p className="text-gray-400 text-sm">
                  Go to Events page and choose the event you like.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <h3 className="font-semibold mb-2">3️⃣ Register</h3>
                <p className="text-gray-400 text-sm">
                  Enter your email and book your spot instantly.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <h3 className="font-semibold mb-2">4️⃣ Get Confirmation</h3>
                <p className="text-gray-400 text-sm">
                  Receive event details directly in your email inbox.
                </p>
              </div>

            </div>
          </div>

          <div className="mt-20">

            <h2 className="text-2xl font-semibold text-center mb-10">
              📊 DevVerse in Numbers
            </h2>

            <div className="grid md:grid-cols-3 gap-6 text-center">

              {/* Stat 1 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition">
                <h3 className="text-3xl font-bold text-white">100+</h3>
                <p className="text-gray-400 mt-2">Events Listed</p>
              </div>

              {/* Stat 2 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition">
                <h3 className="text-3xl font-bold text-white">500+</h3>
                <p className="text-gray-400 mt-2">Developers Joined</p>
              </div>

              {/* Stat 3 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition">
                <h3 className="text-3xl font-bold text-white">50+</h3>
                <p className="text-gray-400 mt-2">Communities Covered</p>
              </div>

            </div>
          </div>

        </div>
      </section>
  );
}