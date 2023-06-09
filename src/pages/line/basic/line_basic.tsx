import * as echarts from 'echarts'
import { FC, useEffect, useRef } from 'react'

interface LineBasicChartProps { }

const LineBasicChart: FC<LineBasicChartProps> = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    const myChart = echarts.init(chartRef.current)
    myChart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          type: 'line',
          data: [150, 230, 224, 218, 135, 147, 260]
        }
      ]
    })

  }, [])

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default LineBasicChart