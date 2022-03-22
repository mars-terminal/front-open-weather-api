
import 
{   VStack, Heading, 
    Text, SimpleGrid, GridItem,
    FormControl, FormLabel, Input, Button
} from "@chakra-ui/react"

interface ContentProps {
    city: string
    setCity: React.Dispatch<React.SetStateAction<string>>
}


const Content: React.FC<ContentProps> = ({city, setCity}) => {
    return (
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg="black">
            <VStack spacing={5} alignItems="flex-start">
                <Heading size="2xl" textColor="white">
                    Content Type
                </Heading>
                <Text textColor="white">
                    There is my content text
                </Text>
            </VStack>
            <SimpleGrid columns={3} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel color="white" fontSize="xx-large"> City </FormLabel>
                        <Input
                            textColor="white" 
                            placeholder="Nur-Sultan" 
                            value={city} 
                            onChange={e => setCity(e.target.value)}
                        ></Input>
                    </FormControl>
                    <GridItem colSpan={2} py={3}>
                        <Button size="lg" w="full">
                            Enter
                        </Button>
                    </GridItem>
                </GridItem>
            </SimpleGrid>
        </VStack>
    )
}


export default Content