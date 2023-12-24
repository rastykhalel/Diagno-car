import { Box, Button, CssBaseline, Typography } from '@mui/material'
import React from 'react'
import exampleImage from '../../assets/images/image.jpg';
import exampleImage2 from '../../assets/images/image2.jpg';
import NavigateNext from '@mui/icons-material/NavigateNext'; // Import all icons
import { Link } from 'react-router-dom';
import MultiActionAreaCard from './smallcompindashbord/postcard';
import image from '../../assets/images/image.jpg'
import Posttabs from './smallcompindashbord/posttabs'
import SwipeableTemporaryDrawer from './smallcompindashbord/notfication';
import { FeedbackOutlined } from '@mui/icons-material';
import Formforfeedback from './smallcompindashbord/formforfeedback';



function dashbord() {

  return (
    <div >

      <CssBaseline />

      <div style={{ overflow: 'hidden', width: '100%', height: '100vh' }}>

        <img src={exampleImage} alt="Example"
          style={{
            zIndex: '-1000',
            width: '110%',
            height: '100%',
            objectFit: 'cover',
          }} />

        <div style={{
          position: 'absolute',
          top: '100px',
          width: '350px',
          minWidth: '200px',
          right: '10%',
          zIndex: '10',
          color: 'black',
          backgroundColor: 'rgba(234, 235, 243, 0.7)',
          padding: '20px',
          borderRadius: '20px'
        }}>

          <h1 style={{ textJustify: 'auto', textAlign: 'right' }}>
            لە بری تـۆ !ئـێـمــە
            بەدوای کێشــەی
            ئۆتـۆمبێلەکەت
            دەگەڕێین
          </h1>
          <Button component={Link} to="/login" style={{ backgroundColor: '#1976D2', color: 'white', borderRadius: '20px', width: '100%' }} startIcon={<NavigateNext />} >  چوونە ژورەوە </Button>
        </div>
      </div>


      <div style={{ overflow: 'hidden', width: '100%', height: '100vh' }}>

        <img src={exampleImage2} alt="Example"
          style={{
            zIndex: '-1000',
            width: '110%',
            height: '100%',
            objectFit: 'cover',
          }} />

        <div style={{
          position: 'absolute',
          top: '700px',
          width: '350px',
          minWidth: '200px',
          left: '10%',
          zIndex: '10',
          color: 'black',
          backgroundColor: 'rgba(234, 235, 243, 0.7)',
          padding: '20px',
          borderRadius: '20px'
        }}>

          <h1 style={{ textJustify: 'auto', textAlign: 'right' }}>
            کاتێکی کەمتر و
            زانیاریەکی وردتر
          </h1>
          <Button component={Link} to="/Login" style={{ backgroundColor: '#1976D2', color: 'white', borderRadius: '20px', width: '100%' }} startIcon={<NavigateNext />} >  چوونە ژورەوە </Button>
        </div>
      </div>

      <Typography sx={{ textAlign: 'center', marginTop: '10px', backgroundColor: 'ButtonShadow' }} variant="h4"> بڵاوکراوە </Typography>
      <Box
        sx={{
          display: 'flex',
          padding: '5%',
          flexDirection: 'row', // Default direction: horizontal for desktop
          flexWrap: 'wrap', // Allows items to wrap to the next line if space is insufficient
          justifyContent: 'space-between', // Adjust spacing between items
          '@media (max-width: 600px)': {
            flexDirection: 'column', // Change to vertical direction for mobile (below 600px)
            alignItems: 'center',
            justifyContent: 'space-between',  // Center items in the column for mobile view
          },
        }}
      >
        <MultiActionAreaCard Id={'12'}
          imageSource={image}
          Title="سوودەکانی ڕۆنی بزوێنەر"
          Text="چەورکردن: ڕۆڵێکی سەرەکی ڕۆنە کە ئەو شوێنانەی بەریەک دەکەون چەور دەکات، تاکوو لەگەڵ بەردەوامی کارکردن دووچاری داخوران نەبن." />
        <MultiActionAreaCard Id={'12'}
          imageSource={image}
          Title="سوودەکانی ڕۆنی بزوێنەر"
          Text="چەورکردن: ڕۆڵێکی سەرەکی ڕۆنە کە ئەو شوێنانەی بەریەک دەکەون چەور دەکات، تاکوو لەگەڵ بەردەوامی کارکردن دووچاری داخوران نەبن." />

        <MultiActionAreaCard Id={'12'}
          imageSource={image}
          Title="سوودەکانی ڕۆنی بزوێنەر"
          Text="چەورکردن: ڕۆڵێکی سەرەکی ڕۆنە کە ئەو شوێنانەی بەریەک دەکەون چەور دەکات، تاکوو لەگەڵ بەردەوامی کارکردن دووچاری داخوران نەبن." />


      </Box>


      <div style={{ overflow: 'hidden', width: '100%' }} dir='rtl'>

        <Posttabs />


      </div>

      <Box
      sx={{
        display:'flex',
        backgroundColor: 'ButtonHighlight',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap:'wrap'
  
      


      }}
      >

      <Box  sx={{
        
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        width:'25ch',
        flex:'1',
        order:'2'


      }}>
       <Formforfeedback  />
      </Box>

      <Box  sx={{
        
        display:'flex',
        alignItems: 'center',
        padding: '40px',
        width: '60ch',
        flex:'1'
    


      }}>
       
       <Box  sx={{
        
        display:'flex',
     flexDirection:'column',
        padding: '40px',
      
       


      }}>
        <Typography  sx={{textAlign:'right'}}> <h2>ڕاو سەرنج </h2> </Typography>
       <Typography sx={{textAlign:'right'}}
       >هێرشی ناپلیۆن بۆ سەر میسڕ و سووریا 
       (بە عەرەبی:
        غزو ​​نابليون لمصر وسوريا، بە ئینگلیزی: 
        Napoleon's invasion of Egypt and Syria) 
        هێرشی ناپلیۆن بۆناپارت کونسوڵی یەکەمی فەڕەنسا لە نێوان ١٧٩٨ بۆ ١٨٠٠ بۆ ڕۆژهەڵاتی ناوەڕاست و بە تایبەتیش بۆ میسڕ بە یەکێک لە گرنگترین 
        داگیرکارییەکانی ناپلیۆن هەژماردەکرێت کە بووەتە 
        هۆی گۆڕانکارییەکی بەرفراوان لە نەخشەی ڕۆژهەڵاتی
         ناوەڕاست لە هەموو ڕوانگەیەکەوە. ئەم جەنگە لە
         ڕوانگەی مێژوونووسان لە مێژووی نوێدا گرنگی
        
         </Typography>
      </Box>

      </Box>


      </Box>


    </div>
  )
}

export default dashbord

