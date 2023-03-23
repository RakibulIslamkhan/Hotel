import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  TextField,
  Typography,
} from "@mui/material";
import { Container, Box } from "@mui/system";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Footer from "../Footer/Footer";
import MainNav from "../Navigation/MainNav";
import Navbar from "../Navigation/Navbar";
import Select from "@mui/material/Select";

export default function Book() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <MainNav />
      <Navbar />
      <Box sx={{ backgroundColor: "lightgray", py: "3em" }}>
        <Container>
          <Box
            sx={{
              width: {lg:"32em",},
              mx: "auto",
              backgroundColor: "#fff",
              p: {lg:"2em 2.5em", xs:'2em 1.5em'},
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                my: "1em",
                flexDirection:{xs:'column', lg:'row'}
              }}
            >
              <Box>
                <Typography>Check In Date *</Typography>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  placeholderText="dd---yyyy"
                  dateFormat="dd/MM/yyyy"
                  showDisabledMonthNavigation
                  minDate={new Date()}
                  className="in"
                />
              </Box>
              <Box>
                <Typography>Check Out Date *</Typography>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  placeholderText="dd---yyyy"
                  dateFormat="dd/MM/yyyy"
                  showDisabledMonthNavigation
                  minDate={new Date()}
                  className="out"
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent:'space-between', my:'1.5em', flexDirection:{xs:'column', lg:'row'} }}>
              <Box sx={{ width: {lg:"45%", xs:'100%'} }}>
                <Typography>Expected Time of Check-in</Typography>
                <select name="adults" id="adults">
                  <option value="volvo">00:00-01:00</option>
                  <option value="saab">00:00-02:00</option>
                  <option value="opel">00:00-03:00</option>
                  <option value="audi">00:00-04:00</option>
                </select>
              </Box>
              <Box sx={{ width: {lg:"39%", xs:'100%'} }}>
                <Typography>Adults*</Typography>
                <select name="adults" id="adults">
                  <option value="volvo">1</option>
                  <option value="saab">2</option>
                  <option value="opel">3</option>
                  <option value="audi">4</option>
                </select>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent:'space-between', my:'1.5em', flexDirection:{xs:'column', lg:'row'} }}>
              <Box sx={{ width: {lg:"45%", xs:'100%'} }}>
                <Typography>Kids</Typography>
                <select name="adults" id="adults">
                  <option value="volvo">1</option>
                  <option value="saab">2</option>
                  <option value="opel">3</option>
                  <option value="audi">4</option>
                </select>
              </Box>
              <Box sx={{width: {lg:"39%", xs:'100%'} }}>
                <Typography>Room/Suite*</Typography>
                <select name="adults" id="adults">
                  <option value="volvo">1</option>
                  <option value="saab">2</option>
                  <option value="opel">3</option>
                  <option value="audi">4</option>
                </select>
              </Box>
            </Box>
            <Box>
              <Typography>Discount Coupon Code</Typography>
              <TextField id="outlined-basic" variant="outlined" fullWidth />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", my:'1.5em', flexDirection:{xs:'column', lg:'row'} }}>
              <Box>
                <Typography>Name *</Typography>
                <TextField id="outlined-basic" variant="outlined" sx={{width:{xs:'100%'}}} />
              </Box>
              <Box>
                <Typography>Email *</Typography>
                <TextField id="outlined-basic" variant="outlined" sx={{width:{xs:'100%'}}}/>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" , my:'1.5em', flexDirection:{xs:'column', lg:'row'}}}>
              <Box>
                <Typography>TelePhone</Typography>
                <TextField id="outlined-basic" variant="outlined" sx={{width:{xs:'100%'}}}/>
              </Box>
              <Box>
                <Typography>Mobil Number *</Typography>
                <TextField id="outlined-basic" variant="outlined" sx={{width:{xs:'100%'}}}/>
              </Box>
            </Box>
            <Box sx={{my:'1.5em'}}>
            <Typography>Address</Typography>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              fullWidth
            />
            </Box>
            <Box sx={{my:'1.5em'}}>
            <Typography>Special Request</Typography>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              fullWidth
            />
            </Box>
            <Button variant="contained" color="success" fullWidth sx={{my:'1.5em'}}>
              Book Now
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}
