class HttpClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private async request(
        method: string,
        endpoint: string,
        body?: any,
        headers: Record<string, string> = {}
    ) {
        const url = `${this.baseUrl}${endpoint}`;
        const options: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }

    get(endpoint: string, headers?: Record<string, string>) {
        return this.request('GET', endpoint, undefined, headers);
    }

    post(endpoint: string, body: any, headers?: Record<string, string>) {
        return this.request('POST', endpoint, body, headers);
    }

    put(endpoint: string, body: any, headers?: Record<string, string>) {
        return this.request('PUT', endpoint, body, headers);
    }

    delete(endpoint: string, headers?: Record<string, string>) {
        return this.request('DELETE', endpoint, undefined, headers);
    }
}
const apiClient = new HttpClient('https://anapioficeandfire.com/api');

export { apiClient };