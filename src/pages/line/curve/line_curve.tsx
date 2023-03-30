import * as echarts from 'echarts/core'
import { FC, useEffect, useRef } from 'react'

interface LineCurveChartProps { }

const LineCurveChart: FC<LineCurveChartProps> = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    const chart = echarts.init(chartRef.current)
    chart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
          smooth: true,
        }
      ]
    })
  }, [])

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default LineCurveChart