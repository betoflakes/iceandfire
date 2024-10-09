import House from "@/interfaces/House";
import Link from "next/link";

export default async function HousesComponent() {
    const data = await fetch('http://localhost:3000/api/houses', { cache: 'no-store' });
    const houses: House[] = await data.json();
    return (
        <>
            <div className="border-b-2 text-center mb-2">
                <h1>
                    Houses
                </h1>
            </div>
            <div>
                {houses.map((house: House) => (
                    <div key={house.id} className="border p-4 mb-4 rounded shadow-sm cursor-pointer hover:bg-red-100 hover:bg-opacity-15">
                        <Link href={`?house=${house.id}`}>
                            <div className="pb-3 pt-1 ">
                                <h5 className="text-xl font-bold">{house.name}</h5>
                                {house.swornMembers.length === 0 ? <p>This house has no sworn members</p> : <p>Members: {house.swornMembers.length}</p>}
                            </div>
                        </Link>
                    </div>
                ))}
            </div >
        </>
    );
}