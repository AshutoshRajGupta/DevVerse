
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className="w-full border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/icons/logo.png" alt="logo" width={28} height={28} />
                    <p className="text-lg font-semibold tracking-wide">DevEvent</p>
                </Link>

                {/* Nav Links */}
                <div className="flex items-center gap-6">

                    <Link
                        href="/"
                        className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition"
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition"
                    >
                        About
                    </Link>

                    <Link
                        href="/events"
                        className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition"
                    >
                        Events
                    </Link>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;
