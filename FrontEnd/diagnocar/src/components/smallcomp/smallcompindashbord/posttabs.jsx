
import Box from '@mui/material/Box';
import MultiActionAreaCard from './postcard';
import image from '../../../assets/images/image.jpg';

export default function BasicTabs() {


  return (

    <div role="tablist" className="tabs tabs-lifted">
      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="نوێترین بڵاوکراوە" />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
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
        </Box></div>

      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="زۆرترین بینراو" checked />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"> <Box
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
      </div>
    </div>



  );
}
