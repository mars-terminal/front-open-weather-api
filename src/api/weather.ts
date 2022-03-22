import { WeatherResponse } from "../types/weather"

export interface fetchWeatherProps {
    city: string
}


export const fetchWeather = async ({
    city
} : fetchWeatherProps): Promise<WeatherResponse | Error> => {
    const resp = await fetch(`/weather/${city}`)
    if (!resp.ok) return new Error(resp.statusText)
    return resp.json()
}
