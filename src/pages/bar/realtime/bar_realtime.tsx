import * as echarts from 'echarts/core'
import moment from 'moment'
import { FC, useEffect, useRef, useState } from 'react'

interface BarRealtimeChartProps { }

const BarRealtimeChart: FC<BarRealtimeChartProps> = () => {
  const chartRef = useRef()
  const chartInstance = useRef(null)
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    const newData = []
    const startTime = moment().subtract(10, 's')
    for (let i = 0; i < 10; i++) {
      startTime.add(1, 's')
      newData.push({
        name: startTime.format(),
        value: [startTime.toDate(), Math.round(Math.random() * 30)]
      })
    }
    setChartData(newData)

    chartInstance.current = echarts.init(chartRef.current)
    chartInstance.current.setOption({
      xAxis: {
        type: 'time',
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          type: 'bar',
          data: newData,
        }
      ]
    })

    const timer = setInterval(() => {
      updateData(newData)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    chartInstance.current.setOption({
      series: {
        data: chartData
      }
    })
  }, [chartData])

  const updateData = (originData) => {
    originData.shift()
    originData.push({
      name: moment().format(),
      value: [moment().toDate(), Math.round(Math.random() * 30)]
    })
    setChartData([...originData])
  }

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default BarRealtimeChart