import * as echarts from 'echarts/core'
import { FC, useEffect, useRef } from 'react'

interface LineMultiSeriesChartProps { }


const LineMultiSeriesChart: FC<LineMultiSeriesChartProps> = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    const chart = echarts.init(chartRef.current)
    chart.setOption({
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['16 LEC', '1 VER', '55 SAI', '11 PER'],
      },
      xAxis: {
        type: 'category',
        data: ['BRN', 'SAU', 'AUS', 'IMO', 'MIA', 'ESP', 'MON', 'AZB', 'CAN', 'GBR', 'AUT', 'FRA', 'HUN', 'BEL'],
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '16 LEC',
        type: 'line',
        data: [26, 45, 71, 86, 104, 104, 116, 116, 126, 138, 170, 170, 178, 186]
      }, {
        name: '1 VER',
        type: 'line',
        data: [0, 25, 25, 59, 85, 110, 125, 150, 175, 181, 208, 233, 258, 284],
      }, {
        name: '55 SAI',
        type: 'line',
        data: [18, 33, 33, 38, 53, 65, 83, 83, 102, 127, 133, 144, 156, 171],
      }, {
        name: '11 PER',
        type: 'line',
        data: [0, 12, 30, 54, 66, 85, 110, 129, 129, 147, 151, 163, 173, 191],
      }],
    })
  }, [])
  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default LineMultiSeriesChart