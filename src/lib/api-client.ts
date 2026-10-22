const configuredApiBase = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_URL || '';
const API_BASE_URL = configuredApiBase.replace(/\/+$/, '');

function getApiUrl(endpoint: string) {
    const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const base = API_BASE_URL.endsWith('/api') ? API_BASE_URL : `${API_BASE_URL}/api`;
    return `${base}${path}`;
}

export class ApiClient {
    private static async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = getApiUrl(endpoint);

        const response = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        return response.json();
    }

    static get<T>(endpoint: string) {
        return this.request<T>(endpoint, { method: 'GET' });
    }
}
