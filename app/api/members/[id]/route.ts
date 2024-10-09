import { apiClient } from '@/utils/httpClient';
import { NextApiRequest } from 'next';

export async function GET(req: NextApiRequest, {params}: {params: { id: string }}) {

    const request = await apiClient.get(`/characters/${params.id}`);
    return Response.json(request);
}