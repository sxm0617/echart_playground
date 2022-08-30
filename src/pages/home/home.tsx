import { Button, Col, Row } from 'antd'
import { FC } from 'react'
import './style.css'

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
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Button type='primary' className='chart-button'>基础折线图</Button>
          </Col>
          <Col span={6}>
            <Button type='primary' className='chart-button'>基础折线图</Button>
          </Col>
          <Col span={6}>
            <Button type='primary' className='chart-button'>基础折线图</Button>
          </Col>
          <Col span={6}>
            <Button type='primary' className='chart-button'>基础折线图</Button>
          </Col>
        </Row>
      </div>

    </div>
  )
}

export default Home