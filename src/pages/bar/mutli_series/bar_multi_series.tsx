import * as echarts from 'echarts/core'
import { FC, useEffect, useRef } from 'react'

interface BarMultiSeriesChartProps { }

const BarMultiSeriesChart: FC<BarMultiSeriesChartProps> = () => {
  const chartRef = useRef()

  useEffect(() => {
    const chart = echarts.init(chartRef.current)
    chart.setOption({
      legend: {
        data: ['Male', 'Female']
      },
      xAxis: {
        type: 'category',
        data: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Male',
          type: 'bar',
          barGap: 0,
          label: {
            show: true,
            position: 'top'
          },
          data: [0, 1, 6, 16, 7, 6, 1, 0]
        },
        {
          name: 'Female',
          type: 'bar',
          barGap: 0,
          label: {
            show: true,
            position: 'top'
          },
          data: [2, 4, 10, 9, 2, 2, 0, 0]
        }
      ]
    })
  }, [])

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default BarMultiSeriesChart