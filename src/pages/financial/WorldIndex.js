import { VectorMap } from 'react-jvectormap'
import axios from 'axios'

const date = new Date()
date.setDate(date.getDate() - 7)
const startDate = date.toISOString().split('T')[0]
console.log(startDate)

//financeapi.net/tutorial

var options = {
  method: 'GET',
  url: 'https://yfapi.net/v8/finance/chart/AAPL?range="5d"',
  params: { modules: 'defaultKeyStatistics,assetProfile' },
  headers: {
    'x-api-key': process.env.REACT_APP_API_KEY,
  },
}
axios
  .request(options)
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.error(error)
  })
const mapData = {}
// RU BR US CN DE IN AR ID AU ES
// const mapData = {
//   CN: 100000,
//   IN: 9900,
//   SA: 86,
//   EG: 70,
//   SE: 0,
//   FI: 0,
//   FR: 0,
//   US: 20,
// }
// const handleClick = (e, countryCode) => {
//   console.log(countryCode)
// }

const WorldIndex = () => {
  return (
    <div>
      <p>From blah blah we can see how the world markets where today</p>
      <VectorMap
        map={'world_mill'}
        backgroundColor='transparent' //change it to ocean blue: #0077be
        zoomOnScroll={false}
        containerStyle={{
          width: '100%',
          height: '520px',
        }}
        containerClassName='map'
        regionStyle={{
          initial: {
            fill: '#e4e4e4',
            'fill-opacity': 0.9,
            stroke: 'none',
            'stroke-width': 0,
            'stroke-opacity': 0,
          },
        }}
        series={{
          regions: [
            {
              values: mapData, //this is your data
              scale: ['#146804', '#ff0000'], //your color game's here
              normalizeFunction: 'polynomial',
            },
          ],
        }}
      />
    </div>
  )
}

export default WorldIndex
