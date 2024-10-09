import House from '@/interfaces/House';
import { apiClient } from '@/utils/httpClient';

export async function GET() {

    const request = await apiClient.get('/houses');

    const data: House[] = request.map((house: any) => {
        const id = house.url.split('/')[house.url.split('/').length - 1];
        return {
            id,
            name: house.name,
            region: house.region,
            coatOfArms: house.coatOfArms,
            words: house.words,
            swornMembers: house.swornMembers,
        };
    });

    return Response.json(data);
}