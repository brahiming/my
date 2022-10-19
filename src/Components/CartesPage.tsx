
import React, { FunctionComponent } from 'react';
import {useDispatch, useSelector } from "react-redux";

// import { useAppDispatch, useAppSelector } from '../../app/hooks';
// import { isConcerned, KycState, updateWhoIsConcerned, WhatIWant } from '../../features/kyc/kycSlice';
import { Box, Grid } from '@mui/material';
// import { next, nextWithSkip, previous } from '../../features/navigation/navigationSlice';
// import ButtonLinkMutac from '../ButtonLinkMutac';
// import RequirementsForm from './RequirementsForm';
// import ButtonWithIcon from '../ButtonWithIcon';
// import ButtonWidget from '../ButtonWidget';
// import { useTranslation } from 'react-i18next';
// import H2 from '../H2';
// import H3 from '../H3';
// import Titlebar from '../Titlebar';
// import theme from '../../theme';
import {movies$} from '../Data/movies';
import { AppDispatch } from '../store/store';
import { addMovies, Movie } from '../features/moviesSlice';
const dispatch = () => useDispatch<AppDispatch>();

const CartesPage: FunctionComponent = () => {
    
    const obj :Movie = {
        id: "1",
        title: "Oceans 8",
        category:  "Comedy",
        likes: 4,
        dislikes: 1,
}
dispatch(addMovies(obj));
   
    // movies$.then((val)=> dispatch(addMovies(obj)));
    // movies$.then((val)=> console.log((val[0])));

return(
<Box>
  <Box sx={{position: 'relative'}}>
       {/* <Grid container sx={{maxWidth: '1400px', margin: 'left', display: 'flex', justifyContent: 'center'}}> */}
         {/* <Grid item xs={4} md={3} padding={1} sx={{display: 'flex', justifyContent: 'center'}}>
         </Grid>
         <Grid item xs={4} md={3} padding={1} sx={{display: 'flex', justifyContent: 'center'}}>
         </Grid>
         <Grid item xs={4} md={3} padding={1} sx={{display: 'flex', justifyContent: 'center'}}>
         </Grid> */}
       {/* </Grid> */}
     </Box>
  </Box>
    )
};
export default CartesPage;