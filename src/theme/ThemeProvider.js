import React from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as Tp } from '@mui/material/styles';
import theme from './theme';

const ThemeProvider = ({children}) => {
	return (
		<Tp theme={theme}>
			<CssBaseline />
            
			{children}
		</Tp>
	);
};

export default ThemeProvider;
