import * as echarts from 'echarts/core'
import { FC, useEffect, useRef } from 'react'

interface PieBasicChartProps { }

const PieBasicChart: FC<PieBasicChartProps> = () => {
  const chartRef = useRef()

  useEffect(() => {
    const data = [
      {
        name: 'XS',
        value: 2,
      },
      {
        name: 'S',
        value: 5,
      },
      {
        name: 'M',
        value: 16,
      },
      {
        name: 'L',
        value: 25,
      },
      {
        name: 'XL',
        value: 9,
      },
      {
        name: '2XL',
        value: 8,
      },
      {
        name: '3XL',
        value: 1,
      },
      {
        name: '4XL',
        value: 0,
      }
    ]
    const chart = echarts.init(chartRef.current)
    chart.setOption({
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
      },
      series: [
        {
          type: 'pie',
          radius: '70%',
          label: {
            show: true,
            formatter: (params) => {
              const total = data.reduce((count, value) => {
                return count + value.value
              }, 0)
              return `${params.name} ${(params.value / total * 100).toFixed(2)}%`
            }
          },
          data: data,
        }
      ]
    })
  }, [])

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default PieBasicChart