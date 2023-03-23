import React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { Box, Divider, Paper } from "@mui/material";
import glass from "../../assets/glass.jpg"
import sofa from "../../assets/sofa.jpg"
import diving from "../../assets/diving.jpg"
import beach from "../../assets/beach2.jpg"
const styles = {
    bgOne:{
    backgroundImage: `url(${glass})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
    height: "400px",
    width: "280px",
    borderRadius: "0",
    position:'relative',
    zIndex:'1',
    },
    bgTwo:{
        backgroundImage: `url(${sofa})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
        height: "400px",
        width: "280px",
        borderRadius: "0",
        position:'relative'
    },
    bgThree:{
        backgroundImage: `url(${diving})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
        height: "400px",
        width: "280px",
        borderRadius: "0",
        position:'relative',
    },
    bgFour:{
        backgroundImage: `url(${beach})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
        height: "400px",
        width: "280px",
        borderRadius: "0",
        position:'relative',
    },
}
function Experience() {
  return (
    <div>
      <Container sx={{py:'3em'}}>
        <Typography
          variant="h4"
          color="initial"
          sx={{ fontWeight: "bold", textAlign: "center",}}
        >
          EXPERIENCE UNIQUEHOSPITALITY 
        </Typography>
        <Divider
          sx={{ width: "8%", border: "solid", margin: "1.5rem auto" }}
        />
        <Typography
          variant="body1"
          color="initial"
          sx={{ textAlign: "center", fontSize: "1.2rem", px:'1rem' }}
        >
          Lorem ipsum dolor sit amet, conse elit, sed do eiusmod tempor
          incididudolore magna aliqua. Ut enim ad aliquip ex ea commodo
          consequat. Lorem ipsum dolor sit amet, conse elit, sed do eiusmod
          tempor incididudolore magna aliqua. 
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            margin: "0 auto",
            pt: "4em",
            justifyContent: "center",
          }}
        >
          <Paper style={styles.bgOne} className='effect'>
            <Typography sx={{color:'#fff', px:'2rem', position:'absolute', bottom:'2rem'}}>
            Lorem ipsum dolor <br/> sit amet 
            </Typography>
            <div className="effect-two"></div>
          </Paper>
          <Paper style={styles.bgTwo} className='effect'>
            <Typography sx={{color:'#fff', px:'2rem', position:'absolute', bottom:'2rem'}}>
            Lorem ipsum dolor <br/> sit amet 
            </Typography>
            <div className="effect-two"></div>
          </Paper>
          <Paper style={styles.bgThree} className='effect'>
            <Typography sx={{color:'#fff', px:'2rem', position:'absolute', bottom:'2rem'}}>
            Lorem ipsum dolor <br/> sit amet 
            </Typography>
            <span className="effect-two"></span>
          </Paper>
          <Paper style={styles.bgFour} className='effect'>
            <Typography sx={{color:'#fff', px:'2rem', position:'absolute', bottom:'2rem'}}>
            Lorem ipsum dolor <br/> sit amet 
            </Typography>
            <div className="effect-two"></div>
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default Experience;
