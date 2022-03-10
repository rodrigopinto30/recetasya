import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import FoodsList from './food/FoodsList';   

const HomeScreen: React.FC = () =>{

    const [foods, setFoods] = React.useState([]);

    React.useEffect(()=>{
        axios.get(`https://api.spoonacular.com/recipes/search?apiKey=2e9c9050918d43b8b1e799cf479d9fe2&1003464`)
            .then((result) => {setFoods(result.data.results);}
            )
            .catch((error) => console.log(error))
    },[])

    return(
        <Stack
            flex={1}
            spacing={6}
        >
            <Flex
                backgroundSize="cover"
                backgroundImage="url('https://media.gq.com.mx/photos/5f317fa2356b187cffb8431b/16:9/w_2560%2Cc_limit/comida%2520saludable.jpg')"
                minHeight={64} 
                padding={6} 
                borderRadius="md" 
                alignItems="flex-end" 
                justifyContent="flex-start"
            >
                <Heading 
                    color="white"
                    fontSize="4xl"
                > 
                    Recetas ya 
                </Heading>
            </Flex>

            <FoodsList foods={foods}/> 
        </Stack>
    );
}

export default HomeScreen;