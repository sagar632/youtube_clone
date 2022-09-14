import React from 'react'
import {Stack, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import {logo} from '../utils/constants'
import SearchBar from './SearchBar'
const NavBar = () => (
    <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <Typography color="red" variant="h5" fontWeight="bold" p={2}>
             YouTube Clone
            </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );

export default NavBar