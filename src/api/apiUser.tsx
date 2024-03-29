import axios from "axios";
import { API_URL } from "../services/utils/constants";

export const getListUser = async (currentPage: number | 0) => {
	const res = await axios.get(`${API_URL}/users?_page=${currentPage}`);
	const data = await res.data;
	return data;
};

export const getAccountById = async (id: string | "") => {
	try {
		const res = await axios.get(`${API_URL}/users/${id}`);
		const data = await res.data;
		return data;
	} catch (error) {
		return {
			error: true,
		};
	}
};

export const getUserForLogin = async (username: string, password: string) => {
	const strParams = `username=${username}&password=${password}`;
	const res = await axios.get(`${API_URL}/users?${strParams}`);
	const data = await res.data[0];
	return data;
};

export const registerAccount = async (dataAccount = {}) => {
	try {
		const res = await axios.post(`${API_URL}/users`, dataAccount);
		return {
			status: res.status || 201,
			message: res.statusText || "Created",
		};
	} catch (error) {
		return {
			error: true,
		};
	}
};

export const delAccountById = async (id: string | "") => {
	try {
		const res = await axios.delete(`${API_URL}/users/${id}`);
		return {
			status: res.status || 200,
			message: res.statusText || "Detected successfully",
		};
	} catch (error) {
		return {
			error: true,
		};
	}
};

export const updateAccountById = async (id = "", dataAccount = {}) => {
	try {
		const res = await axios.patch(`${API_URL}/users/${id}`, dataAccount);
		return {
			status: res.status,
			message: res.statusText,
		};
	} catch (error) {
		return {
			error: true,
		};
	}
};
