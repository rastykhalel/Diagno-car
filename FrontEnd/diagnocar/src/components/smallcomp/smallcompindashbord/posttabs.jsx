import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MultiActionAreaCard from './postcard';
import image from '../../../assets/images/image.jpg';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', textAlign: 'right' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="نوێترین بڵاوکراوە" />
          <Tab label="زۆرترین بینراو" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            '@media (max-width: 600px)': {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          }}
        >
          <MultiActionAreaCard
            Id={'12'}
            imageSource={image}
            Title="سوودەکانی ڕۆنی بزوێنەر"
            Text="چەورکردن: ڕۆڵێکی سەرەکی ڕۆنە کە ئەو شوێنانەی بەریەک دەکەون چەور دەکات، تاکوو لەگەڵ بەردەوامی کارکردن دووچاری داخوران نەبن."
          />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            '@media (max-width: 600px)': {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          }}
        >
          <MultiActionAreaCard
            Id={'12'}
            imageSource={image}
            Title="سوودەکانی ڕۆنی بزوێنەر"
            Text="چەورکردن: ڕۆڵێکی سەرەکی ڕۆنە کە ئەو شوێنانەی بەریەک دەکەون چەور دەکات، تاکوو لەگەڵ بەردەوامی کارکردن دووچاری داخوران نەبن."
          />

          <MultiActionAreaCard
            Id={'12'}
            imageSource={image}
            Title="سوودەکانی ڕۆنی بزوێنەر"
            Text="چەورکردن: ڕۆڵێکی سەرەکی ڕۆنە کە ئەو شوێنانەی بەریەک دەکەون چەور دەکات، تاکوو لەگەڵ بەردەوامی کارکردن دووچاری داخوران نەبن."
          />

          <MultiActionAreaCard
            Id={'12'}
            imageSource={image}
            Title="سوودەکانی ڕۆنی بزوێنەر"
            Text="چەورکردن: ڕۆڵێکی سەرەکی ڕۆنە کە ئەو شوێنانەی بەریەک دەکەون چەور دەکات، تاکوو لەگەڵ بەردەوامی کارکردن دووچاری داخوران نەبن."
          />
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
