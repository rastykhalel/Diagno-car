import { Box, CssBaseline, Typography } from "@mui/material";
import React from "react";
import exampleImage from "../../assets/images/image.jpg";
import exampleImage2 from "../../assets/images/image2.jpg";
import MultiActionAreaCard from "./smallcompindashbord/postcard";
import image from "../../assets/images/image.jpg";
import Posttabs from "./smallcompindashbord/posttabs";
import Formforfeedback from "./smallcompindashbord/formforfeedback";
import Footerdashbord from "./smallcompindashbord/footerdashbord";
import Imagedashbord from "./smallcompindashbord/imagedashbord";




function dashbord() {
  return (
    <div className="bg-base-200 text-base-content">
      <CssBaseline />

      
     <Imagedashbord image={exampleImage} text="لە بری تـۆ !ئـێـمــە بەدوای کێشــەی ئۆتـۆمبێلەکەت دەگەڕێین" loc="right" />

  

<Imagedashbord image={exampleImage2} text=" دایاگنۆ کار هەنگاوێکی نوێ لە بواری ئۆتۆمبێل لەهەرێمی کوردستان"  />


      <div dir="rtl">
        <Typography
          className="bg-base-200 text-base-content"
          sx={{
            textAlign: "center",
            marginTop: "10px",
          }}
          variant="h4"
        >
          {" "}
          بڵاوکراوە{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            padding: "5%",
            flexDirection: "row", // Default direction: horizontal for desktop
            flexWrap: "wrap", // Allows items to wrap to the next line if space is insufficient
            justifyContent: "space-between", // Adjust spacing between items
            "@media (max-width: 600px)": {
              flexDirection: "column", // Change to vertical direction for mobile (below 600px)
              alignItems: "center",
              justifyContent: "space-between", // Center items in the column for mobile view
            },
          }}
        >
          <MultiActionAreaCard
            Id={"12"}
            imageSource={image}
            Title="سوودەکانی ڕۆنی بزوێنەر"
            Text="چەورکردن: ڕۆڵێکی سەرەکی ڕۆنە کە ئەو شوێنانەی بەریەک دەکەون چەور دەکات، تاکوو لەگەڵ بەردەوامی کارکردن دووچاری داخوران نەبن."
          />
          <MultiActionAreaCard
            Id={"12"}
            imageSource={image}
            Title="سوودەکانی ڕۆنی بزوێنەر"
            Text="چەورکردن: ڕۆڵێکی سەرەکی ڕۆنە کە ئەو شوێنانەی بەریەک دەکەون چەور دەکات، تاکوو لەگەڵ بەردەوامی کارکردن دووچاری داخوران نەبن."
          />

          <MultiActionAreaCard
            Id={"12"}
            imageSource={image}
            Title="سوودەکانی ڕۆنی بزوێنەر"
            Text="چەورکردن: ڕۆڵێکی سەرەکی ڕۆنە کە ئەو شوێنانەی بەریەک دەکەون چەور دەکات، تاکوو لەگەڵ بەردەوامی کارکردن دووچاری داخوران نەبن."
          />
        </Box>
      </div>
      <div style={{ overflow: "hidden", width: "100%" }} dir="rtl">
        <Posttabs />
      </div>
      <div className=" lg:text-center mt-4 stat" style={{ overflow: "hidden", width: "100%" }} dir="rtl">
        <div class="stats stats-vertical lg:stats-horizontal shadow">

          <div class="stat">
            <div class="stat-title">Downloads</div>
            <div class="stat-value">31K</div>
            <div class="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div class="stat">
            <div class="stat-title">New Users</div>
            <div class="stat-value">4,200</div>
            <div class="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div class="stat">
            <div class="stat-title">New Registers</div>
            <div class="stat-value">1,200</div>
            <div class="stat-desc">↘︎ 90 (14%)</div>
          </div>

        </div>
      </div>


      <div dir="rtl">
        <Box

          sx={{
            display: "flex",
            backgroundColor: "",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: 'row', // Hide the buttons on mobile devices
            flexWrap: "wrap",
            '@media (max-width: 768px)': { // Adjust the breakpoint as needed
              flexDirection: 'column',
            }
          }}
        >
          <Formforfeedback />


        </Box>
      </div>

      <footer>
        <Footerdashbord />
      </footer>


    </div>

  );
}

export default dashbord;
