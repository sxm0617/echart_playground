import { Button, Col, Row } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.less'

/**
 *
 */
interface HomeProps { }

/**
 *
 */
const Home: FC<HomeProps> = () => {
  return (
    <div style={{ padding: '24px' }}>
      <h1>echarts常用图表实例</h1>
      <div>
        <h2>折线图</h2>
        <Row gutter={[32, 16]}>
          <ChartColumn title='基础折线' path='/line/basic' />
          <ChartColumn title='平滑曲线' path='/line/curve' />
          <ChartColumn title='填充下方' path='/line/fill_below' />
          <ChartColumn title='多条折线' path='/line/multi_series' />
          <ChartColumn title='多条填充' path='/line/multi_fill' />
          <ChartColumn title='时间轴' path='/line/time_axis' />
          <ChartColumn title='实时更新' path='/line/realtime' />
        </Row>
      </div>
      <div>
        <h2>柱状图</h2>
        <Row gutter={[32, 16]}>
          <ChartColumn title='基础柱状' path='/bar/basic' />
          <ChartColumn title='水平柱状' path='/bar/horizontal' />
          <ChartColumn title='多条柱状' path='/bar/multi_series' />
          <ChartColumn title='数据排序' path='/bar/sorted' />
          <ChartColumn title='时间轴' path='/bar/time_axis' />
          <ChartColumn title='实时更新' path='/bar/realtime' />
          <ChartColumn title='实时排序' path='/bar/realtime_sorted' />
        </Row>
      </div>
      <div>
        <h2>饼形图</h2>
        <Row gutter={[32, 16]}>
          <ChartColumn title='基础饼形' path='/pie/basic' />
          <ChartColumn title='圆环饼形' path='/pie/doughnut' />
        </Row>
      </div>
      <div>
        <h2>混合图</h2>
        <Row gutter={[32, 16]}>
          <ChartColumn title='基础折柱' path='/mixed/basic_line_bar' />
          <ChartColumn title='实时折柱' path='/mixed/realtime_line_bar' />
        </Row>
      </div>
    </div>
  )
}

const ChartColumn = ({ title, path }) => {
  const navigate = useNavigate()
  const handleButtonClick = () => {
    navigate(path || '/')
  }

  return (
    <Col span={6}>
      <div style={{ display: 'flex', flex: 1 }}>
        <Button type='primary' className='chart-button' onClick={handleButtonClick}>{title}</Button>
      </div>
    </Col>
  )
}

export default Home