import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Button,
  Divider,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Tab,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import itemData from "../../data/item";
import FsLightbox from "fslightbox-react";

export default function TabImages() {
  const [value, setValue] = React.useState("1");
  const [toggler, setToggler] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const categories = itemData.filter((item) => item.value === value);
  console.log(value);
  return (
    <div style={{ backgroundColor: "#cccccc52", padding: "2em 0" }}>
      <Container>
        <Box sx={{ m: { lg: "2em 5em" } }}>
          <Divider sx={{ bgcolor: "#000" }} />
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, maxWidth: { xs: '520px', lg: '100%'} }}>
                <TabList
                  onChange={handleChange}
                  centered={true}
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  aria-label="scrollable force tabs example"
                  sx={{justifyContent:"center"}}
                >
                  <Tab label="All Images" value="1" />
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      bgcolor: "#000",
                      height: { lg: "15px", xs: "1px" },
                      position: "relative",
                      top: { lg: "15px", xs: "0px" },
                      transform: { lg: "rotate(30deg)", xs: "rotate(0deg)" },
                    }}
                  />
                  <Tab label="Hotel" value="2" />
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      bgcolor: "#000",
                      height: { lg: "15px", xs: "1px" },
                      position: "relative",
                      top: { lg: "15px", xs: "0px" },
                      transform: { lg: "rotate(30deg)", xs: "rotate(0deg)" },
                    }}
                  />
                  <Tab label="Rooms" value="3" />
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      bgcolor: "#000",
                      height: { lg: "15px", xs: "1px" },
                      position: "relative",
                      top: { lg: "15px", xs: "0px" },
                      transform: { lg: "rotate(30deg)", xs: "rotate(0deg)" },
                    }}
                  />
                  <Tab label="Restaurant" value={"4"} />
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      bgcolor: "#000",
                      height: { lg: "15px", xs: "1px" },
                      position: "relative",
                      top: { lg: "15px", xs: "0px" },
                      transform: { lg: "rotate(30deg)", xs: "rotate(0deg)" },
                    }}
                  />
                  <Tab label="Swimming Poll" value={"5"} />
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      bgcolor: "#000",
                      height: { lg: "15px", xs: "1px" },
                      position: "relative",
                      top: { lg: "15px", xs: "0px" },
                      transform: { lg: "rotate(30deg)", xs: "rotate(0deg)" },
                    }}
                  />
                  <Tab label="Weeding" value={"6"} />
                </TabList>
              </Box>
              <Box sx={{ m: { lg: "2em", xs: "0.8em" }, bgcolor: "#fff" }}>
                <TabPanel value="1">
                  <ImageList
                    sx={{
                      width: "500",
                      gridTemplateColumns: {
                        lg: "repeat(4, 1fr) !important",
                        xs: "repeat(1, 1fr) !important",
                      },
                    }}
                  >
                    {itemData.map((item) => (
                      <>
                        <ImageListItem
                          key={item.img}
                          sx={{ m: "0.3em", cursor: "pointer" }}
                          onClick={() => setToggler(!toggler)}
                        >
                          <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                          <ImageListItemBar
                            position="below"
                            title={item.title}
                            sx={{ bgcolor: "#ccc", px: "1em" }}
                          />
                        </ImageListItem>
                      </>
                    ))}
                    <FsLightbox
                      toggler={toggler}
                      sources={itemData.map((item) => item.img)}
                    />
                  </ImageList>
                </TabPanel>
                <TabPanel value="2">
                  <ImageList
                    sx={{
                      width: "500",
                      gridTemplateColumns: {
                        lg: "repeat(4, 1fr) !important",
                        xs: "repeat(1, 1fr) !important",
                      },
                    }}
                  >
                    {categories.map((item) => (
                      <ImageListItem
                        key={item.img}
                        sx={{ m: "0.3em", cursor: "pointer" }}
                        onClick={() => setToggler(!toggler)}
                      >
                        <img
                          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.title}
                          loading="lazy"
                        />
                        <ImageListItemBar
                          position="below"
                          title={item.title}
                          sx={{ bgcolor: "#ccc", px: "1em" }}
                        />
                      </ImageListItem>
                    ))}
                    <FsLightbox
                      toggler={toggler}
                      sources={categories.map((item) => item.img)}
                    />
                  </ImageList>
                </TabPanel>
                <TabPanel value="3">
                  <ImageList
                    sx={{
                      width: "500",
                      gridTemplateColumns: {
                        lg: "repeat(4, 1fr) !important",
                        xs: "repeat(1, 1fr) !important",
                      },
                    }}
                  >
                    {categories.map((item) => (
                      <ImageListItem
                        key={item.img}
                        sx={{ m: "0.3em", cursor: "pointer" }}
                        onClick={() => setToggler(!toggler)}
                      >
                        <img
                          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.title}
                          loading="lazy"
                        />
                        <ImageListItemBar
                          position="below"
                          title={item.title}
                          sx={{ bgcolor: "#ccc", px: "1em" }}
                        />
                      </ImageListItem>
                    ))}
                    <FsLightbox
                      toggler={toggler}
                      sources={categories.map((item) => item.img)}
                    />
                  </ImageList>
                </TabPanel>
                <TabPanel value="4">
                  <ImageList
                    sx={{
                      width: "500",
                      gridTemplateColumns: {
                        lg: "repeat(4, 1fr) !important",
                        xs: "repeat(1, 1fr) !important",
                      },
                    }}
                  >
                    {categories.map((item) => (
                      <ImageListItem
                        key={item.img}
                        sx={{ m: "0.3em", cursor: "pointer" }}
                        onClick={() => setToggler(!toggler)}
                      >
                        <img
                          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.title}
                          loading="lazy"
                        />
                        <ImageListItemBar
                          position="below"
                          title={item.title}
                          sx={{ bgcolor: "#ccc", px: "1em" }}
                        />
                      </ImageListItem>
                    ))}
                    <FsLightbox
                      toggler={toggler}
                      sources={categories.map((item) => item.img)}
                    />
                  </ImageList>
                </TabPanel>
                <TabPanel value="5">
                  <ImageList
                    sx={{
                      width: "500",
                      gridTemplateColumns: {
                        lg: "repeat(4, 1fr) !important",
                        xs: "repeat(1, 1fr) !important",
                      },
                    }}
                  >
                    {categories.map((item) => (
                      <ImageListItem
                        key={item.img}
                        sx={{ m: "0.3em", cursor: "pointer" }}
                        onClick={() => setToggler(!toggler)}
                      >
                        <img
                          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.title}
                          loading="lazy"
                        />
                        <ImageListItemBar
                          position="below"
                          title={item.title}
                          sx={{ bgcolor: "#ccc", px: "1em" }}
                        />
                      </ImageListItem>
                    ))}
                    <FsLightbox
                      toggler={toggler}
                      sources={categories.map((item) => item.img)}
                    />
                  </ImageList>
                </TabPanel>
                <TabPanel value="6">
                  <ImageList
                    sx={{
                      width: "500",
                      gridTemplateColumns: {
                        lg: "repeat(4, 1fr) !important",
                        xs: "repeat(1, 1fr) !important",
                      },
                    }}
                  >
                    {categories.map((item) => (
                      <ImageListItem
                        key={item.img}
                        sx={{ m: "0.3em", cursor: "pointer" }}
                        onClick={() => setToggler(!toggler)}
                      >
                        <img
                          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.title}
                          loading="lazy"
                        />
                        <ImageListItemBar
                          position="below"
                          title={item.title}
                          sx={{ bgcolor: "#ccc", px: "1em" }}
                        />
                      </ImageListItem>
                    ))}
                    <FsLightbox
                      toggler={toggler}
                      sources={categories.map((item) => item.img)}
                    />
                  </ImageList>
                </TabPanel>
              </Box>
            </TabContext>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
