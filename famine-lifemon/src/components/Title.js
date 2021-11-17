import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { ThemeProvider,createTheme } from '@mui/material/styles';

export default function Title() {
	const theme_1 = createTheme({
		typography: {
			fontFamily:'Merriweather'
		}
	});
	return(
		<ThemeProvider theme = {theme_1}>
			<Box sx={{background:"linear-gradient(45deg, #3B5A9D 10%, #111A2D 100%)", p:0,m:-2}}>
				<Grid container spacing={2} direction="row" >
					<Grid item xs={12}>
					</Grid>
					<Grid item className="title" xs={5} p={0} style={{justifyContent:"flex-end", alignItems:"center"}}>
						<Typography
							variant="h5"
							fontSize={22}
							fontWeight='bold'
							lineHeight={1}
						>
							Famine 24
						</Typography>
					</Grid>	
					<Grid item xs={2} align="center">
						<img
							className="logo"
							src="passlogo.png"
							alt="ICPASS logo"
							align="middle"/>
					</Grid>
					<Grid item className="title" xs={5} p={0} style={{justifyContent:"flex-start", alignItems:"center"}}>
						<Typography
							variant="h5"
							fontSize={22}						
							fontWeight='bold'
							lineHeight={1}
						>
							Passport
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</ThemeProvider>	
	
	);
}

