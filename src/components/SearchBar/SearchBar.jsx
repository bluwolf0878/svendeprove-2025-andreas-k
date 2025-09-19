import { useState } from "react";

export function SearchBar() {
    const [From, setFrom] = useState("");
    const [To, setTo] = useState("");

    const swapPlaces = () => {
        const temp = from;
        setFrom(To);
        setTo(temp);
    };

    return (
        <div>
            <div className="sticky top-0 bg-white shadow p-4 flex items-center space-x-2">
                <input value={From} onChange={(e) => setFrom(e.target.value)} placeholder="hvor fra?" className="border p-2 flex-1 rounded" />
            </div>

            <button onClick={swapPlaces} className="px-3 py-2 bg-grey-200 rounded hover:bg-grey-300 font-bold text-4xl">↔︎</button>

            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Søg lift</button>
        </div>
    );
}