import NavigateNext from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

function Imagedashbord(para) {
    return (
      <div style={{position: 'relative', overflow: 'hidden', width: '100%', height: '100vh' }}>
        <img
          src={para.image}
          alt="Example"
          style={{
            zIndex: '-1000',
            width: '110%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
  
        <div
        className="bg-base-200 "
          style={{
            position: 'absolute',
            top: '100px',
            width: '350px',
            minWidth: '200px',
            zIndex: '10',
           
            padding: '20px',
            borderRadius: '20px',
            [para.loc ? 'right' : 'left']: '10%',
          }}
        >
          <h1 style={{ textAlign: 'right',  fontSize:'40px'}}>
            {para.text}
          </h1>
          <Link to="/login" className="btn btn-sm btn-primary" style={{ borderRadius: '20px', width: '100%', display: 'flex', alignItems: 'center' }}>
      چوونە ژورەوە
      <NavigateNext style={{ marginLeft: '5px' }} />
    </Link>
        </div>
      </div>
    );
  }
  
  export default Imagedashbord;
  