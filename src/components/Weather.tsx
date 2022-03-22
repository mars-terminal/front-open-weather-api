import { Heading, VStack, Box, Container } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { fetchWeather } from "../api/weather";
import { WeatherData } from "../types/weather";

interface WeatherBlockProps {
    city?: string
}

const Weather:React.FC<WeatherBlockProps> = ({city}) => {
    const [weather, setWeather] = useState<WeatherData>()
    const [error, setError] = useState("")


    useEffect(() => {
        if (!city) {
            setError("")
            setWeather(undefined)
        }

        if (city) {
            (async () => {
                setWeather(undefined)
                setError("")
                const resp = await fetchWeather({city})
                if (resp instanceof Error) {
                    setError(resp.message)
                } else {
                    setWeather(resp)
                }
            })()
        }
    }, [city])


    return (
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg="blackAlpha.900">
            <VStack>
                <Heading size="2xl" textColor="#FEEBC8"> Weather for today </Heading>
            </VStack>
            <Container>
                <Box boxShadow='base' p={10} w="full" rounded='md' bg='#FEEBC8' alignItems="flex-start" >
                    {
                        error && !weather && <p>{error}</p>
                    }
                    {
                        weather && <>
                            <Box>Country: {weather?.sys.country} </Box>
                            <Box>Temp: {weather?.main.temp} C</Box>
                            <Box>Feels Like: {weather?.main.feels_like} C </Box>
                            <Box>Humidity: {weather?.main.humidity}%</Box>
                            <Box>Coordinate: lat:({weather?.coord.lat}) lon:({weather?.coord.lon})</Box>
                            <Box>Time Zone: {weather?.timezone && weather?.timezone > 0 && "+"}{weather?.timezone && weather?.timezone / 3600} </Box>
                        </>
                    }
                </Box>
            </Container>
            
        </VStack>
    );
}

export default Weather