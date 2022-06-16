import { Box } from '@mui/material'
import React from 'react'

type Props = {
    url: string
}

function Banner({ url }: Props) {
  return (
    <Box sx={{ backgroundImage: `url(${url})`}} className="page-head_agile_info_w3l" ></Box>
    )

}

export default Banner