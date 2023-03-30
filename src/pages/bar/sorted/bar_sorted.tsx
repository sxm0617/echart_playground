import * as echarts from 'echarts/core'
import { FC, useEffect, useRef } from 'react'

interface BarSortedChartProps { }

const BarSortedChart: FC<BarSortedChartProps> = () => {
  const chartRef = useRef()

  useEffect(() => {
    const chart = echarts.init(chartRef.current)
    chart.setOption({
      dataset: [
        {
          dimensions: ['size', 'count'],
          source: [
            ['XS', 2],
            ['S', 5],
            ['M', 16],
            ['L', 25],
            ['XL', 9],
            ['2XL', 8],
            ['3XL', 1],
            ['4XL', 0]
          ]
        },
        {
          transform: {
            type: 'sort',
            config: { dimension: 'count', order: 'asc' }
          }
        }
      ],
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
      },
      series: [
        {
          type: 'bar',
          encode: { x: 'count', y: 'name' },
          datasetIndex: 1,
          label: {
            show: true,
            position: 'right'
          }
        }
      ]
    })
  }, [])

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default BarSortedChart