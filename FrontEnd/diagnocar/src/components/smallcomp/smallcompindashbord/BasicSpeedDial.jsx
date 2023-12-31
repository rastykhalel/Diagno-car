import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
   { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function BasicSpeedDial() {
  const handlePrint = () => {
    window.print(); // Trigger printing functionality
  };

  const handleShare = () => {
    const url = window.location.href; // Get the current URL
    navigator.clipboard.writeText(url); // Copy URL to clipboard
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: 'Check out this website!',
        url: window.location.href
      })
      .then(() => console.log('Shared successfully'))
      .catch(error => console.error('Error sharing:', error));
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };

  return (
    <Box sx={{ height: 400, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={
              action.name === 'Print'
                ? handlePrint
                : action.name === 'Share'
                ? handleShare
                : undefined // Conditionally assign onClick function
            }
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
