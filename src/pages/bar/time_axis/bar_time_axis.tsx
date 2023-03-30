import * as echarts from 'echarts/core'
import moment from 'moment'
import { FC, useEffect, useRef } from 'react'

interface BarTimeAxisChartProps { }

const BarTimeAxisChart: FC<BarTimeAxisChartProps> = () => {
  const chartRef = useRef()

  useEffect(() => {
    const data = []
    const startTime = moment().startOf('d')
    for (let i = 0; i < 24; i++) {
      data.push([startTime.toDate(), Math.round(Math.random() * 100)])
      startTime.add(1, 'h')
    }
    const chart = echarts.init(chartRef.current)
    chart.setOption({
      xAxis: {
        type: 'time',
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          type: 'bar',
          data: data,
        }
      ]
    })
  }, [])

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default BarTimeAxisChart