import * as echarts from 'echarts'
import { FC, useEffect, useRef } from 'react'

interface MixedBasicLineBarChartProps { }

const MixedBasicLineBarChart: FC<MixedBasicLineBarChartProps> = () => {
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
          label: {
            show: true,
            position: 'top',
          },
          data: [150, 230, 224, 218, 135, 147, 260]
        },
        {
          type: 'bar',
          label: {
            show: true,
            position: 'top',
          },
          data: [14, 68, 26, 40, 64, 14, 19]
        }
      ]
    })

  }, [])

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default MixedBasicLineBarChart