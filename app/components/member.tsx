import Member from "@/interfaces/Member";

export default async function MemberComponent({ member }: { member?: string }) {
    if (!member) {
        return (
            <div className="text-center">Select a member</div>
        );
    }
    const data = await fetch(`http://localhost:3000/api/members/${member}`, { cache: 'no-store' });
    const memberData: Member = await data.json();
    return (
        <>
            <h3 className="text-center border-b-2 mb-2">{memberData.name}</h3>
            <strong>Culture:</strong> {memberData.culture.length > 0 ? memberData.culture : 'No specify'}<br />
            {memberData.died.length > 0 ? <><strong>Died: </strong> {memberData.died}</> : (<strong className="text-green-400">Alive</strong>)}
            <br />
            <strong>Titles:</strong> {memberData.titles.length === 0 ? <i>No titles</i> : memberData.titles.join(', ')}<br />
        </>

    );
}