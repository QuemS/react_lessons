import React from 'react'

import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props => {
  const dataPointValue = props.dataPoints.map(point => point.value)
  const totalMaximum = Math.max(...dataPointValue)

  return (
    <div className='chart'>
      {props.dataPoints.map((point) => <ChartBar key={point.label} value={point.value} maxValue={totalMaximum} label={point.label} />)}
    </div>
  )
}

export default Chart