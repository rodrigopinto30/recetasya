import { Center, Grid, Stack } from "@chakra-ui/react";
import React from "react";
import Filters from "./Filters";
import FoodGrid from "./FoodGrid";
import { Foods } from "./types";
import {Filter} from './filterTypes';


interface Props{
    foods: Foods[];
}
const FoodsList: React.FC<Props> = ({foods}) =>{

    const [filter, setFilter] = React.useState<Filter>(Filter.MasPorciones);

    //Se ejecuta cuando cambien las dependencias
    const filterFoods = React.useMemo(() => {
        switch(filter){
            case Filter.MasPorciones:{
                return[...foods].sort((a, b) => (b.servings - a.servings));
            }

            case Filter.MasTiempoLectura: {
                return[...foods].sort((a, b) => (b.readyInMinutes - a.readyInMinutes));
            }

            case Filter.MenosPorciones:
            default:{
                return foods;
            }
        }

    }, [filter, foods])

    return(
        <Stack direction="column" alignItems="flex-start" spacing={6}>
            <Filters active={filter} onChange={setFilter}/>
            <Grid templateColumns='repeat(3  , 1fr)' gap={10}>
                {
                    filterFoods.map((food) => (
                        <FoodGrid key={food['id']} food={food}/>
                    ))
                }
            </Grid>
        </Stack>
    );
}

export default FoodsList;