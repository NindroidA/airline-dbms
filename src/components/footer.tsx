import { version } from "../../package.json";

export default function FooterComponent() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-gray-800 text-zinc-300">
            <div className="w-full px-4 py-6 flex flex-col items-center justify-center">
                <hr className="w-full border-zinc-700 mb-4" />
                <div className="text-sm">
                    <span>{currentYear}</span>
                </div>
                <div className="mt-2 text-sm">
                    <span className="hover:text-zinc-100 cursor-pointer">
                        ✈️ Airline-DBMS - {version} - Developed by Andrew Curtis 🛠️
                    </span>
                </div>
            </div>
        </footer>
    );
}