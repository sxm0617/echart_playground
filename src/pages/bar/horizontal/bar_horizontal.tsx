import * as echarts from 'echarts/core'
import { FC, useEffect, useRef } from 'react'

interface BarHorizontalChartProps { }

const BarHorizontalChart: FC<BarHorizontalChartProps> = () => {
  const chartRef = useRef()

  useEffect(() => {
    const chart = echarts.init(chartRef.current)
    chart.setOption({
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
        data: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']
      },
      series: [
        {
          type: 'bar',
          data: [2, 5, 16, 25, 9, 8, 1, 0]
        }
      ]
    })
  }, [])

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default BarHorizontalChart