import { apiClient } from '@/utils/httpClient';
import { NextApiRequest } from 'next';

export async function GET(req: NextApiRequest, {params}: {params: { house: string }}) {

    const request = await apiClient.get(`/houses/${params.house}`);

    const swornMembers = [];

    for (const member of request.swornMembers) {
        const id = member.split('/')[member.split('/').length - 1];
        const memberRequest = await apiClient.get(`/characters/${id}`);
        swornMembers.push({...memberRequest, id});
    }

    return Response.json({...request, swornMembers});
}