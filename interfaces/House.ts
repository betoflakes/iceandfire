import Member from "./Member";

interface House {
    id: string;
    name: string;
    region: string;
    coatOfArms: string;
    words: string;
    swornMembers: Member[];
}

export default House;