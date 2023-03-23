import React, { useState } from "react";
import {
  Box,
  Container,
  Button,
  Divider,
  SvgIcon,
  Typography,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../../Theme/Icons/calendar";
import Guest from "../../Theme/Icons/guest";
import Rooms from "../../Theme/Icons/rooms";
import Arrow from "../../Theme/Icons/arrow";
function Booking() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [roomsCount, setRoomsCount] = useState(0);
  const [guestsCount, setGuestsCount] = useState(0);
  console.log(guestsCount)

  const handleRooms = (value) => {
    if(value === 'plus'){
      if (roomsCount < 10) {
        setRoomsCount(roomsCount + 1);
      }
    }
    else if(value === 'minus'){
      if (roomsCount > 0) {
        setRoomsCount(roomsCount - 1);
      }
    }
  };
  const handleGuests = (value) => {
    if(value === 'plus'){
      if (guestsCount < 10) {
        setGuestsCount(guestsCount + 1);
      }
    }
    else if(value === 'minus'){
      if (guestsCount > 0) {
        setGuestsCount(guestsCount - 1);
      }
    }
  }
  const handleBook = () =>{
    const data = {'guestsCount': guestsCount, 'roomsCount': roomsCount, 'startDate': startDate, 'endDate': endDate}
    localStorage.setItem('userData', JSON.stringify(data))
    setGuestsCount(0)
    setRoomsCount(0)
    setStartDate(0)
    setEndDate(0)
  }
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: {lg:"row", xs:"column"},
        justifyContent: "space-between",
        px:{lg:'2em', sm:'0'},
        py: "1rem",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        position: "absolute",
        bottom: "2em",
        left: "0",
        right: "0",
        width: {lg:"50%", sm:'100%'},
        zIndex: "1",
      }}
    >
      <Box
        sx={{
          background: "#e7e4e4",
          display: "flex",
          width:{lg:'190px', sm:'100%'},
          alignItems: "center",
          p: "0.5em 1.3em",
          mb:{lg:'0', xs:'1em'},
          mr: '5px'
        }}
      >
        <SvgIcon>
          <Calendar />
        </SvgIcon>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          placeholderText="Check in"
          className="datepicker"
          dateFormat="dd/MM/yyyy"
          showDisabledMonthNavigation
          minDate={new Date()}
          // maxDate={addMonths(new Date(), 5)}
        />
          <SvgIcon sx={{mr:{lg:'10px',xs:'40px'}}}>
            <Arrow/>
          </SvgIcon>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          placeholderText="Check out"
          className="datepicker"
          dateFormat="dd/MM/yyyy"
          showDisabledMonthNavigation
          minDate={new Date()}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#e7e4e4",
          py: "0.2em",
          paddingLeft: "1.5em",
          paddingRight: "0.3em",
          width:{lg:'100px', sm:'100%'},
          mb:{lg:'0', xs:'1em'},
          mr: '5px'
        }}
      >
        <Rooms />
        <Typography sx={{ fontSize: "12px" }}>{roomsCount ? roomsCount : 'Rooms'}</Typography>
        <Box sx={{ textAlign: "center", background: "#fff", width: "25px" }}>
          <Button
            sx={{ minWidth: "20px", p: "0", lineHeight: "0", color: "#d50014" }}
            onClick={() => handleRooms('plus')}
          >
            +
          </Button>
          <Divider sx={{ width: "50%", m: "0 auto" }} />
          <Button
            sx={{ minWidth: "20px", p: "0", lineHeight: "0", color: "#d50014" }}
            onClick={() => handleRooms('minus')}
          >
            -
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#e7e4e4",
          py: "0.2em",
          paddingLeft: "1.5em",
          paddingRight: "0.3em",
          width: {lg:'100px', sm:'100%'},
          mb:{lg:'0', xs:'1em'},
          mr: '5px'
        }}
      >
        <Guest />
        <Typography sx={{ fontSize: "12px" }}>{guestsCount ? guestsCount : 'Guests'  }</Typography>
        {/* <input type="text" placeholder='guest' value={guestsCount ? guestsCount : 'guest' } style={{width:'40px', border:'none', background:'transparent', textAlign:'center', outline:'none'}} onChange={(e) => {
          const value = parseInt(e.target.value)
          if(value > 10){
            setGuestsCount(value)
          }
        }}/> */}
        <Box sx={{ textAlign: "center", background: "#fff", width: "25px" }}>
          <Button
            sx={{ minWidth: "20px", p: "0", lineHeight: "0",color: "#d50014" }}
            onClick={() => handleGuests('plus')}
          >
            +
          </Button>
          <Divider sx={{ width: "50%", m: "0 auto" }} />
          <Button
            sx={{ minWidth: "20px", p: "0", lineHeight: "0", color: "#d50014" }}
            onClick={() => handleGuests('minus')}
          >
            -
          </Button>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          textTransform: "capitalize",
          backgroundColor: "#d50014",
          fontSize: "12px",
          borderRadius: "0",
          p: "8px 10px",
        }}
        onClick={handleBook}
      >
        Check Rooms & Rates
      </Button>
    </Container>
  );
}

export default Booking;
