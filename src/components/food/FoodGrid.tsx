import {Image, Text, Stack, Button, Container, Circle, Center, Box, Icon } from "@chakra-ui/react";
import React from "react";
import {Foods} from "./types";

interface Props{
    food: Foods;
}

const FoodGrid: React.FC<Props> =({food}) =>{
    return(
        <Box
            borderRadius={7} 
            height="100%"
            justifyItems="center"
            marginTop={12}
        >
            <Stack 
                paddingY={1}
                spacing={0}
                direction="column"
            >
                <Stack
                    direction="row"
                    spacing={0}
                >
                    <Center 
                        width="50%"
                        borderTopLeftRadius={10}
                        backgroundColor="gray.100"
                    >
                        <Stack 
                            direction="column"
                            alignContent="center" 
                            alignItems="center" 
                            spacing={0}>
                                <Text
                                    fontSize="90%"
                                    color="black"
                                >
                                    Tiempo de lectura: 
                                </Text>
                                <Text 
                                    color="black"
                                >
                                    {food['readyInMinutes']} min.
                                </Text>
                        </Stack>
                        
                    </Center>
                    <Center 
                        backgroundColor="gray.100" 
                        width="50%" 
                        borderTopRightRadius={10}
                    >
                        <Stack
                            direction="column"
                            alignContent="center"
                            alignItems="center"
                            spacing={0}
                        >
                            <Text
                                fontSize="90%"
                                color="black"
                            >
                                Cantidad de porciones: 
                            </Text>
                            <Text 
                                color="black" 
                                padding={0}
                            >
                                {food['servings']}
                            </Text>
                        </Stack>
                    </Center>
                </Stack>
                <Center>
                <Text
                    fontWeight="bold"
                    padding={6}
                    borderColor="gray.100"
                    borderWidth={1}
                    borderStyle="solid"
                    color="green.800"
                    backgroundColor="green.2100"
                    textAlign="center"
                    lineHeight={1}
                    height={20}
                    width="100%"
                >
                    {food['title']}
                </Text>
                </Center>
                <Image backgroundImage="cover" src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/190af244549577.581624946e26f.jpg'/>   
            </Stack>
            <Stack
                paddingY={0}
                direction="row"
                justifyContent="space-between"
                spacing={2}
            >
                
                <Button
                    borderWidth={1}
                    borderStyle="solid"
                    borderColor="green.800"
                    borderRadius="md"
                    width="50%"
                    backgroundColor="white"
                    color="green.800"
                    _hover={{
                        backgroundColor:"green.800",
                        color:"white"
                    }}
                >
                    Agreagar a menú
                </Button>
                <Button
                    as="a"
                    href= {food['sourceUrl']}
                    borderWidth={1}
                    borderStyle="solid"
                    borderColor="green.800"
                    borderRadius="md"
                    width="50%"
                    backgroundColor="white" 
                    color="green.800"
                    _hover={{

                        backgroundColor: "green.800",
                        color: "white"
                    }}
                >
                    Ir a receta
                </Button>
            </Stack>
        </Box>
    );
}

export default FoodGrid;