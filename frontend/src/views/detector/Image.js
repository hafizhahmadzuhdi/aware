import { Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ==============================|| Image ||============================== //

const Image = () => (
    <MainCard title="Image" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
        <Grid container spacing={gridSpacing}>
            
        </Grid>
    </MainCard>
);

export default Image;
