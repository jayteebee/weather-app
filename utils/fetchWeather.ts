import axiosInstance from "./axiosInstance";

export const fetchWeather = async (city: string) => {
    try {
        const response = await axiosInstance.get("current.json", {params: {q: city}});
        return response.data;
    } catch (error) {

    }
}