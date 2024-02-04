import axiosInstance from "./axiosInstance";

export const fetchWeather = async (city: string) => {
    try {
        const response = await axiosInstance.get("current.json", {params: {q: city}});
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data && error.response.data.error && error.response.data.error.code === 1006) {
            console.error('Error fetching weather data: City not found.');
            throw new Error('City not found. Please check spelling and try again.');
        } else {
            console.error('Error fetching weather data:', error);
            throw  error;
        }
    }
};