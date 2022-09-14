
import './App.css';
import{BrowserRouter,Routes,Route}from 'react-router-dom';
import {Box} from '@mui/material';
import NavBar from './components/NavBar';
import Feed from './components/Feed';
import VideoDetails from './components/VideoDetails';
import ChannelDetails from './components/ChannelDetails';
import SearchFeed from './components/SearchFeed';

function App() {
  return (
 <BrowserRouter>
 <Box sx={{backgroundColor:'#000'}}>
  <NavBar/>
  <Routes>
    <Route path="/" exact element={<Feed/>}/>
    <Route path="/video/:id" element={<VideoDetails/>}/>
    <Route path="/channelDetails/:id" element={<ChannelDetails/>}/>
    <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
  </Routes>
   </Box>
 
 </BrowserRouter>
  );
}

export default App;
