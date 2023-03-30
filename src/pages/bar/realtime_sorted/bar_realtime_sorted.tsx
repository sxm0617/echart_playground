import * as echarts from 'echarts/core'
import { FC, useEffect, useRef, useState } from 'react'

interface BarRealtimeSortedChartProps { }

const BarRealtimeSortedChart: FC<BarRealtimeSortedChartProps> = () => {
  let data = []
  const chartRef = useRef()
  const chartInstance = useRef(null)
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    for (let i = 0; i < 8; i++) {
      data.push(Math.round(Math.random() * 50))
    }

    setChartData(data)
    chartInstance.current = echarts.init(chartRef.current)
    chartInstance.current.setOption({
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
        data: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 4,
      },
      series: [
        {
          realtimeSort: true,
          type: 'bar',
          data: data,
          label: {
            show: true,
            position: 'right',
            valueAnimation: true
          }
        }
      ]
    })

    const timer = setInterval(() => {
      updateData()
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    chartInstance.current.setOption({
      series: [
        {
          data: chartData,
        }
      ]
    })
  }, [chartData])

  const updateData = () => {
    data.map((_, index) => {
      data[index] += Math.round(Math.random() * 20)
    })
    setChartData([...data])
  }

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default BarRealtimeSortedChart