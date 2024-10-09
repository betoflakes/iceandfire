import House from "@/interfaces/House";
import Member from "@/interfaces/Member";
import Link from "next/link";

export default async function HouseComponent({ house }: { house?: string }) {
    if (house === undefined) {
        return (
            <div className="text-center">Select a house</div>
        );
    }
    const data = await fetch(`http://localhost:3000/api/houses/${house}`, { cache: 'no-store' });
    const houseData: House = await data.json();
    return (
        <>
            <h3 className="text-center border-b-2 mb-2">{houseData.name}</h3>
            <strong>Coat of Arms: </strong>{houseData.coatOfArms.length > 0 ? houseData.coatOfArms : 'No specify'}<br />
            <strong>Region:</strong> {houseData.region}<br />
            {houseData.words ? <> <strong>Words:</strong> {houseData.words}<br /> </> : null}
            <strong>Sworn Members:</strong> {houseData.swornMembers.length === 0 ? <i>This house has no sworn members</i> : <>{houseData.swornMembers.length}</>}
            <hr />
            <ul>
                {houseData.swornMembers.map((member: Member, index) => (
                    <Link key={index} href={`?house=${house}&member=${member.id}`}>
                        <li>{member.name} - {member.died.length > 0 ? `Died ${member.died}` : (<strong className="text-green-400">Alive</strong>)}</li>
                    </Link>
                ))}
            </ul>
        </>
    );
}