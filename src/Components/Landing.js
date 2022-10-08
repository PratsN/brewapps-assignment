import React , {useState } from "react";
import Data from "./Data";
import CardData from "./CardData";
import Header from "./Header";
import { Box } from "@mui/system";
import { Grid} from "@mui/material";
import Buttons from "./Button";
import Footer from "./Footer";
import SearchData from "./Search"

const Landing = () => {

const [data , setData] = useState(Data)
const [searchText , setSearchText] = useState("")


const filterItem = (cate) => {
   const newItem =Data.filter((item) => {
    return item.category === cate
   })
   setData(newItem)
}


const searchItem= (event) => {
  setSearchText(event.target.value)
   if (searchText !== "") {
    const result = data.filter((obj) =>
      Object.keys(obj).some((key) => String(obj[key]).toLowerCase().includes(searchText.toLowerCase()))
    );
    setData(result);
  } else {
    setData(data);
  }
   
}
console.log(searchText)



    return (
        <>
        <Header/>
        <SearchData searchData={searchItem} />
        <Buttons setItem={setData} filterItem={filterItem}/>
        <Box 
                sx={{
                  width: { xs: '90%', md: '90%' },
                  margin: "auto",
                  padding: "2"
                }}
              >
                <Grid container spacing={2}>

          { data.map((item) => {
            return (
              <Grid item key={item.id} xs={12} sm={6} md={3}>
                <CardData video={item}></CardData>
              </Grid>
            );
          })}
        </Grid>
      </Box>


     <Footer/>
    
        </>

    )
}

export default Landing;