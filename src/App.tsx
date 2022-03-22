import { Flex, Container } from '@chakra-ui/react';
import { useState } from 'react';
import Content from './Content';
import Weather from './components/Weather';


function App() {
    const [city, setCity] = useState("")

    return ( 
        <Container maxW="container.xl" p={20}>
            <Flex  h="80vh" py={5}>
                <Content city={city} setCity={setCity} />
                <Weather city={city} />
            </Flex>
        </Container> 
    );
}

export default App;
