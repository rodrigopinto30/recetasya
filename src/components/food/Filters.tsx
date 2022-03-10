import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {Filter} from './filterTypes';

interface Props{
    active: Filter
    onChange: (filter: Filter) => void  
}

const FILTER: Filter[] = [Filter.MasPorciones, Filter.MasTiempoLectura];

const Filters: React.FC<Props> = ({active, onChange}) =>{

    return(
        <Stack paddingY={9} direction="row" alignItems="center" spacing={6}>
            <Text>
                ordenar por:
            </Text>
            <Stack direction="row" spacing={4}>
                {
                    FILTER.map((filter) => (
                        <Box
                            key={filter}
                            backgroundColor={filter == active ? "green.800" : "white"}
                            color={filter == active ? "white": "green.800"}
                            paddingY={2}
                            paddingX={6}
                            fontWeight="bold"
                            borderRadius={999}
                            borderColor={filter == active ? "white": "green.800"}
                            borderStyle="solid"
                            borderWidth={1}
                            cursor="pointer"
                            onClick={() => onChange(filter)}
                        >
                            {filter}
                        </Box>
                    ))
                }
            </Stack>
        </Stack>
    );
}

export default Filters;