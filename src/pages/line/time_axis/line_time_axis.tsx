import * as echarts from 'echarts/core'
import moment from 'moment'
import { FC, useEffect, useRef } from 'react'

interface LineTimeAxisChartProps { }

const LineTimeAxisChart: FC<LineTimeAxisChartProps> = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    const data = []
    const startTime = moment().startOf('d')
    for (let i = 0; i < 1440; i++) {
      if (i === 0) {
        data.push([moment(startTime), Math.floor(Math.random() * 100)])
        continue
      }
      data.push([
        moment(startTime).add(i, 'm').toDate(), Math.floor((Math.random() - 0.5) * 100) + data[i - 1][1]
      ])
    }

    const chart = echarts.init(chartRef.current)
    chart.setOption({
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'time',
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          type: 'line',
          showSymbol: false,
          data: data,
        }
      ],
    })
  }, [])

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default LineTimeAxisChart