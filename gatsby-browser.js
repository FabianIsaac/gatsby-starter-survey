/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import React from "react"
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './src/theme/theme';



export function wrapRootElement({ element }) {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {element}
        </ThemeProvider>
    )
}