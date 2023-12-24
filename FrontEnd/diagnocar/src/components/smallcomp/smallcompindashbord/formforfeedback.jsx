import { Box, Button, IconButton, TextField } from "@mui/material";





export default function Formforfeedback() {
    return (
        <Box>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
        <TextField
            id="outlined-textarea"
            label="ناو"
          
            multiline
            />
          <TextField
            id="outlined-multiline-flexible"
            label="ئیمەیڵ"
           
            multiline
            maxRows={4}
          />
         
          <TextField
            id="outlined-multiline-static"
            label="سەرنج و تێبینی"
            multiline
            rows={4}
            defaultValue=" "
          />
    </div>
    </Box>


    <Box sx={{width:'100%'}}>
       <Button sx={{width:'100%' , backgroundColor:'#0288d1', color:'white',
       '&:hover': {
          color: 'black',
          backgroundColor:'#4fc3f7'
        },}}  >ناردن</Button>

    </Box>
   

    </Box>
    );
}