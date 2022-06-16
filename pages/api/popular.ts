// fetches popular vehicles from the API
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

    const url = `${process.env.API_URL}/inventory/car/search?country=KE`
    axios.get(url).then(response => {
        res.status(response.status).json(response.data)
        res.end();
    }).catch(error => {
        if (error.response) {
            res.status(error.response.status).json(error.response.data)
          } else if (error.request) {
            res.status(error.request.status).json(error.request.data)
          } else {
            res.status(500).json('internal server error')
          }
          res.end()
    })
}
