import axios, {type AxiosResponse} from 'axios'
import store, { RootState } from '@store/store';

const state : RootState = store.getState();
const apiUrl = state.app.api_url;

export const api = axios.create({
	baseURL: apiUrl, 
	timeout: 5000,
	headers: { 'Content-Type': 'application/json', 'credentials' : 'include' },
	withCredentials: true
});

type SuccessResponse<T> = {
	data: T;
	error: null;
  };
  
  type ErrorResponse = {
	data: undefined | null;
	error: string;
  };

type ResponseType<T> = SuccessResponse<T> | ErrorResponse

export const getData = async <T>(
	url: string, 
	params: Record<string, string> = {}, 
	signal: AbortSignal = null
): Promise<ResponseType<T>> => {
	try {
		const queryString = new URLSearchParams(params).toString();
		const fullUrl = queryString ? `${url}?${queryString}` : url;
	
		const response: AxiosResponse<T> = await api.get(fullUrl, {signal});
		const { data } = response
		if (!data) return { error: null, data: null };
		return { data, error: null};
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return { error: error.response?.data?.message, data: null};
		} else {
			return { error: 'An unexpected error occurred', data: null };
		}
	}
};

export const postData = async <T>(
	url: string, 
	body: unknown, 
	params: Record<string, string> = {},
	signal: AbortSignal = null
): Promise<ResponseType<T>> => {
	try {
		const queryString = new URLSearchParams(params).toString();
		const fullUrl = queryString ? `${url}?${queryString}` : url;
	
		const response: AxiosResponse<T> = await api.post(fullUrl, body, {signal});
		const { data } = response
		if (!data) return { error: 'No data returned', data: null };
		return { data, error: null};
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return { error: error.response?.data?.message, data: null};
		} else {
			return { error: 'An unexpected error occurred', data: null };
		}
	}
};

