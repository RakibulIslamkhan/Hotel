import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  IconButton,
  Link,
  Menu,
  MenuItem,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import Phone from "../../Theme/Icons/phone";
import Place from "../../Theme/Icons/location";

const navItems = [
  "HOME",
  "ACCOMMODATION",
  "DINING",
  "RECREATION",
  "MEETING & EVENTS",
  "GALLERY",
];

export default function Navbar() {
  const [fix, setFix] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const setFixed = () => {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener("scroll", setFixed);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let activeStyle = {
    textDecoration: "none",
    color: "#000",
    fontWeight: "700",
  };
  let inactive = {
    textDecoration: "none",
    color: "#000",
  };
  return (
    <Box
      sx={{ flexGrow: 1, backgroundColor: "#fff", display: "flex", boxShadow:'-2px 4px 5px 0px rgb(0 0 0 / 10%)' }}
      className={fix ? "navbar-fixed" : null}
    >
      <AppBar
        position="static"
        sx={{ backgroundColor: "#fff", boxShadow: "none", color: "#000" }}
        component="nav"
      >
        <Toolbar sx={{ justifyContent: { xs: "flex-end" } }}>
          <Link href="https://g.page/popcornit?share" target="_blank" underline="none">
          <SvgIcon sx={{ display: { lg: "none", xs: "block" } }}>
            <Place />
          </SvgIcon>
          </Link>
          <Box
            sx={{
              display: { xs: "flex", lg: "none" },
              flexDirection: "row",
              alignItems: "center",
              mx:{lg:'0', xs:'3.5em'}
            }}
          >
            <SvgIcon fontSize="large">
              <Phone />
            </SvgIcon>
            <Link href="tel:+88 096 78 44 11 44" underline="none"> <Typography sx={{ color: "#000" }}>+88 096 78 44 11 44</Typography></Link>
          </Box>
          <IconButton
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ display: { lg: "none", xs: "block" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ display: { xs: "none", sm: "block" }, margin: "1rem auto" }}
          >
            {navItems.map((item) => (
              <Button key={item}>
                <NavLink
                  to={`/${item.replace(/\s/g, "-").toLowerCase()}`}
                  style={({ isActive }) => (isActive ? activeStyle : inactive)}
                >
                  {item}
                </NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {navItems.map((item, index) => {
          return (
            <MenuItem>
              <NavLink
                to={`/${item.replace(/\s/g, "-").toLowerCase()}`}
                key={index}
                style={({ isActive }) => (isActive ? activeStyle : inactive)}
              >
                {item}
              </NavLink>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
}