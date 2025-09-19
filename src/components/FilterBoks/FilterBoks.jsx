import { useState } from "react";

export function FilterBoks({onChange}) {
    const [Filters, setFilters] = useState({
        seats: 1,
        baggage: "",
        comfort: false,
        preferences: {
            music: false,
            kids: false,
            pets: false,
            smoking: false,
        },
    });
    const updateFilters = (newFilters) => {
        const udpated = {...Filters, ...newFilters};
        setFilters(udpated);
        onChange(udpated);
    };

    return (
        <>
            <div className="bg-white shadows rounded-lg p-4 space-y-4">
                <h2 className="font-bold text-lg">filtrer</h2>
                <div>
                    <label className="block font-semibold mb-1">Antal pladser</label>
                    <input type="range" min="1" max="4" value={Filters.seats} onChange={(e) => updateFilters({ seats: parseInt(e.target.value) })} className="w-full"/>
                    <p>{Filters.seats}pladser</p>
                </div>
            </div>

            <div>
                <label className="block font-semibold mb-1">Komfort</label>
                <label>
                    <input type="checkbox" checked={Filters.comfort} onChange={(e) => updateFilters({ comfort: e.target.checked })} />
                    <span className="ml-1">højest to personer på bagsædet</span>
                </label>
            </div>

            <div>
                <label className="block font-semibold mb-1">præferencer</label>
                {Object.keys(Filters.preferences).map((pref) => (
                    <label key={pref} className="block">
                        <input type="checkbox" checked={Filters.preferences[pref]} onChange={(e) =>
                            updateFilters({ preferences: { ...Filters.preferences, [pref]: e.target.checked,},})
                        } />
                        <span className="ml-1 capitalize">{pref}</span>
                    </label>
                ))}
            </div>
        </>
    )
}