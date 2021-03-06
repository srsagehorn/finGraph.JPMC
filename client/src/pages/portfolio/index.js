import React from 'react'
import Portfolio from '../../components/PortfolioTable'
import theme from "../../themes/theme"
import { ThemeProvider } from "@material-ui/styles";


export default function PortfolioPage() {
    return (
        <div>
            <ThemeProvider theme={theme}>
            <Portfolio />

            </ThemeProvider>
        </div>
    )
}
