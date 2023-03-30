import * as echarts from 'echarts/core'
import { FC, useEffect, useRef } from 'react'


interface LineFillBelowChartProps { }

const LineFillBelowChart: FC<LineFillBelowChartProps> = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    const chart = echarts.init(chartRef.current)
    chart.setOption({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [418, 216, 876, 786, 168, 506, 860],
          type: 'line',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(128, 255, 165)'
              },
              {
                offset: 1,
                color: 'rgb(1, 191, 236)'
              }
            ])
          },
        }
      ]
    })
  }, [])

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default LineFillBelowChart