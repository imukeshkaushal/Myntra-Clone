import AllRoutes from './Routers/AllRoutes';
import Navbar from "./Components/Navbar";
import { Box } from '@chakra-ui/react';
function App() {
  return (
    <div>
      <Navbar/>
      <Box mt={[16,16,16,16,16,24]}>
        <AllRoutes/>
      </Box>
      
    </div>
  );
}

export default App;
