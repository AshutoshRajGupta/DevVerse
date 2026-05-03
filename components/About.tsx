import React from "react";

const About = () => {
    return (
        <section className="min-h-screen text-white px-6 md:px-16 py-16">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* Heading */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        About DevVerse
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Your one-stop platform to discover, track, and participate in the best developer events around the world.
                    </p>
                </div>

                {/* About Platform */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            🚀 What is DevVerse?
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            DevVerse is a centralized hub for developers to explore hackathons,
                            meetups, and conferences — all in one place. It eliminates the
                            hassle of searching across multiple platforms by bringing curated
                            developer events directly to you.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <p className="text-gray-300">
                            Whether you're a beginner or an experienced engineer, DevVerse helps
                            you stay updated with opportunities to learn, build, and connect.
                        </p>
                    </div>
                </div>

                {/* What Platform Does */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                        🔍 What DevVerse Does
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            "Discover trending hackathons and events",
                            "Filter events based on interests and tech",
                            "Stay updated with upcoming opportunities",
                            "Explore global developer communities",
                            "Save and track your favorite events",
                            "Access event details in one unified place",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition"
                            >
                                <p className="text-gray-300">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                        ✨ Key Features
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Real-time event listings",
                            "Clean and modern UI for smooth experience",
                            "Fast performance with server-side rendering",
                            "Scalable architecture",
                            "Analytics integration for insights",
                            "API-driven data fetching",
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl"
                            >
                                <span className="text-green-400">✔</span>
                                <p className="text-gray-300">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                        🛠 Tech Stack
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: "Next.js", desc: "Framework for building fast web apps" },
                            { name: "React", desc: "Component-based UI library" },
                            { name: "TypeScript", desc: "Type-safe JavaScript" },
                            { name: "MongoDB", desc: "NoSQL database for event storage" },
                            { name: "Postman", desc: "API testing and development" },
                            { name: "PostHog", desc: "Product analytics and tracking" },
                        ].map((tech, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition"
                            >
                                <h3 className="font-semibold text-lg mb-2">
                                    {tech.name}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {tech.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Note */}
                <div className="text-center text-gray-500 text-sm pt-10">
                    Built for developers, by a developer 🚀
                </div>
            </div>
        </section>
    );
};

export default About;