import AllRoutes from './Routers/AllRoutes';
import Navbar from "./Components/Navbar";
import { Box } from '@chakra-ui/react';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      <Navbar/>
      <Box mt={[16,16,16,16,16,24]} >
        <AllRoutes/>
      </Box>
      <Box mt={[,4,4,4,16]} borderTop = "1px solid gainsboro" pt = {8}>
        <Footer/>
      </Box>
    </div>
  );
}

export default App;
