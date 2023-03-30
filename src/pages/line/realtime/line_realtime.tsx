import * as echarts from 'echarts/core';
import moment from 'moment';
import { FC, useEffect, useRef, useState } from 'react';

interface LineRealtimeChartProps { }

const LineRealtimeChart: FC<LineRealtimeChartProps> = () => {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)
  const [chartData, setChartData] = useState([])

  const randomData = (lastValue) => {
    return Math.round((Math.random() - 0.5) * 20 + lastValue)
  }

  useEffect(() => {
    let lastValue = randomData(Math.round(Math.random() * 100))
    const newData = []
    const startTime = moment().subtract(59, 's')
    for (let i = 0; i < 60; i++) {
      startTime.add(1, 's')
      newData.push({
        name: startTime.format(),
        value: [startTime.toDate(), randomData(lastValue)]
      })
    }

    chartInstance.current = echarts.init(chartRef.current)
    const options = {
      xAxis: {
        type: 'time',
        boundary: false,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          type: 'line',
          data: newData,
          showSymbol: false,
        },
      ]
    }

    const timer = setInterval(() => {
      updateData(newData)
    }, 1000)


    chartInstance.current.setOption(options)
    setChartData(newData)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    chartInstance.current.setOption({
      series: [
        {
          data: chartData,
        },
      ]
    })
  }, [chartData])

  const updateData = (originData) => {
    const lastValue = originData[originData.length - 1].value[1]
    originData.shift()
    originData.push({
      name: moment().format(),
      value: [moment().toDate(), randomData(lastValue)]
    })
    setChartData([...originData])
  }

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default LineRealtimeChart