import * as echarts from 'echarts/core';
import moment from 'moment';
import { FC, useEffect, useRef, useState } from 'react';

interface MixedRealtimeLineBarChartProps { }

const MixedRealtimeLineBarChart: FC<MixedRealtimeLineBarChartProps> = () => {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)
  const [chartData, setChartData] = useState([])

  const randomData = (lastValue) => {
    return Math.round((Math.random() - 0.5) * 20 + lastValue)
  }

  useEffect(() => {
    let lastValue = randomData(Math.round(Math.random() * 100))
    const newData = []
    const startTime = moment().subtract(10, 's')
    for (let i = 0; i < 10; i++) {
      startTime.add(1, 's')
      newData.push({
        line: {
          name: startTime.format(),
          value: [startTime.toDate(), randomData(lastValue)]
        },
        bar: {
          name: startTime.format(),
          value: [startTime.toDate(), Math.round(Math.random() * 30)]
        },

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
          label: {
            show: true,
            position: 'top',
          },
          data: newData.map(data => data.line),
        },
        {
          type: 'bar',
          label: {
            show: true,
            position: 'top',
          },
          data: newData.map(data => data.bar),
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
          data: chartData.map(data => data.line),
        },
        {
          data: chartData.map(data => data.bar),
        },
      ]
    })
  }, [chartData])

  const updateData = (originData) => {
    const lastValue = originData[originData.length - 1].line.value[1]
    originData.shift()
    originData.push({
      line: {
        name: moment().format(),
        value: [moment().toDate(), randomData(lastValue)]
      },
      bar: {
        name: moment().format(),
        value: [moment().toDate(), Math.round(Math.random() * 30)]
      }
    })
    setChartData([...originData])
  }

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default MixedRealtimeLineBarChart