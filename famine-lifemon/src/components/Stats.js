import * as React from 'react';


import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function Stats(props) {
	const theme_2 = createTheme({
		typography: {
			fontFamily:'Karla'
		}
	});
	const snapshot = props.snapshot;
	const loading = props.loading;
	const happySymbol = "😄";
	const healthSymbol = "🍎️";
	const educationMap = ["None", "Secondary", "Bachelor's", "Master's"];
	return (
		<>
		<ThemeProvider theme = {theme_2}>
			<Paper elevation={6} style={{ background: 'linear-gradient(45deg, #FFE078 10%, #FFC14F 100%)' }} >
				<Grid container spacing={0.5} fontSize={16} style={{ justifyContent: "flex-end", alignItems: "center" }}>
					<Grid item xs={12}>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body2" fontWeight='medium' color="#111A2D"
							fontSize={13}
							>
							Name
						</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography variant="body2" fontWeight='bold' color="#111A2D" fontSize={14} style={{textTransform: 'uppercase'}} >
							{loading ? "Loading..." : snapshot.name}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body2"fontWeight='medium' color="#111A2D"
							fontSize={13}
							>
							Asset
						</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography variant="body2" fontWeight='bold' color="#111A2D" fontSize={14}>
							{loading ? "Loading..." : "$" + snapshot.money}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body2"fontWeight='medium' color="#111A2D"
							fontSize={13}
							>
							Health
						</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography variant="body2">
							{loading ? "Loading..." : healthSymbol.repeat(snapshot.health)}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body2"fontWeight='medium' color="#111A2D"
							fontSize={13}
							>
							Happiness
						</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography variant="body2">
							{loading ? "Loading..." : happySymbol.repeat(snapshot.happiness)}
						</Typography>
					</Grid>
					<Grid item xs={12}>
					</Grid>
				</Grid>
			</Paper>
			<Paper elevation={6}  style={{ background: 'linear-gradient(45deg, #4FB2AA 10%, #3F8F89 100%)' }} >
				<Grid container spacing={0.5} style={{ justifyContent: "flex-end", alignItems: "center" }}>
					<Grid item xs={12}>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="body2" color="#ffffff" fontWeight='light'
							fontSize={13}
							>
							Qualification
						</Typography>
					</Grid>
					<Grid item xs={7}>
						<Typography variant="body2" color="#ffffff" fontWeight='bold' style={{textTransform: 'uppercase'}} >
							{loading ? "Loading..." : educationMap[snapshot.education]}
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="body2" color="#ffffff" fontWeight='light'
							fontSize={13}
						>	
							Marital status
						</Typography>
					</Grid>
					<Grid item xs={7}>
						<Typography variant="body2" color="#ffffff" fontWeight='bold'>
							{loading ? "Loading..." : snapshot.married ? "MARRIED" : "SINGLE"}
						</Typography>
					</Grid>
					<Grid item xs={12}>
					</Grid>
				</Grid>
			</Paper>
		</ThemeProvider>
		</>
	);
}
