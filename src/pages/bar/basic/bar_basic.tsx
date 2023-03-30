import * as echarts from 'echarts/core'
import { FC, useEffect, useRef } from 'react'

interface BarBasicChartProps { }

const BarBasicChart: FC<BarBasicChartProps> = () => {
  const chartRef = useRef()

  useEffect(() => {
    const chart = echarts.init(chartRef.current)
    chart.setOption({
      xAxis: {
        type: 'category',
        data: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          type: 'bar',
          label: {
            show: true,
            position: 'top'
          },
          data: [2, 5, 16, 25, 9, 8, 2, 0]
        }
      ]
    })
  }, [])

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default BarBasicChart