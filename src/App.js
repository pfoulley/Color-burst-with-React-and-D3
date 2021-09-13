import React, { useState, useEffect } from 'react'
import {csv, arc, pie} from 'd3'

import { message } from './components/message';

const csvUrl = "https://gist.githubusercontent.com/pfoulley/6cb04005b876cbeb70f4cecddf2b945c/raw/cssNamedColors.csv";


const App = () => {
  
  const [data, setData] = useState(null)

  useEffect(() => {
    csv(csvUrl).then(data => {
      setData(data)
      // console.log(data)
    })
    // eslint-disable-next-line
  },[])
  
  const width = 1000;
  const height = 1000;
  const centerX = width / 2;
  const centerY = width / 2;
  
  if (!data) {
    return <pre>
      Loadin ...
    </pre>
  }

  console.log(data[0])
  const pieArc = arc()
    .innerRadius(0)
    .outerRadius(width);
  
  const colorPie = pie()
    .value(1)
  
  return (
    <svg width={width} height={height}
  >
    <g transform={`translate(${centerX}, ${centerY})`}>
      {colorPie(data).map((d, i )=> (<path key={i}
        fill={d.data['RGB hex value']}
        d={pieArc(d)}
      />))}
    </g>
    </svg>)
  
      //   {data.map((d, i )=> (<path key={i}
      //   fill={d['RGB hex value']}
      //   d={pieArc({
      //     startAngle: i / data.length * 2 * Math.PI,
      //     endAngle:  (i+ 1) / data.length * 2 * Math.PI
      //   })}
      // />))}

  // return 
    // (<pre>
    //   {/* {data? message(data): 'loading ...'} */}
      
    // </pre>)

  
  
  
}

export default App;
