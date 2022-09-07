import React from "react";
import "./Header.css"
import { Stack , Box} from "@mui/material";

const Header = () => {


    return (
        <>
         <Box className="header-container">
            <Stack className="logo ">Live-Life</Stack>
            <Stack className="description">Hey You are at right Place...Find out what is trending in the World !</Stack>
        </Box>
        </>

    )
}

export default Header;