import * as echarts from 'echarts/core'
import { FC, useEffect, useRef } from 'react'

interface LineMultiFillChartProps { }

const LineMultiFillChart: FC<LineMultiFillChartProps> = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    const chart = echarts.init(chartRef.current)
    chart.setOption({
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Ferrari', 'Alpine', 'Haas', 'Williams'],
      },
      xAxis: {
        type: 'category',
        data: ['BRN', 'SAU', 'AUS', 'IMO', 'MIA', 'ESP', 'MON', 'AZB', 'CAN', 'GBR', 'AUT', 'FRA', 'HUN', 'BEL'],
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Ferrari',
          type: 'line',
          data: [44, 78, 104, 124, 157, 169, 199, 199, 228, 265, 303, 314, 334, 357],
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(255, 191, 0)'
              },
              {
                offset: 1,
                color: 'rgb(224, 62, 76)'
              }
            ])
          },
        },
        {
          name: 'Alpine',
          type: 'line',
          data: [8, 16, 22, 22, 26, 34, 40, 47, 57, 67, 81, 93, 99, 115],
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(255, 0, 135)'
              },
              {
                offset: 1,
                color: 'rgb(135, 0, 157)'
              }
            ])
          },
        },
        {
          name: 'Haas',
          type: 'line',
          data: [10, 12, 12, 15, 15, 15, 15, 15, 15, 20, 34, 34, 34, 34],
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(0, 221, 255)'
              },
              {
                offset: 1,
                color: 'rgb(77, 119, 255)'
              }
            ])
          },
        },
        {
          name: 'Williams',
          type: 'line',
          data: [0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4],
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
      ],
    })
  }, [])

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  )
}

export default LineMultiFillChart