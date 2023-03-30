import { Button } from 'antd'
import { FC } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './style.less'

interface PageLayoutProps { }

const PageLayout: FC<PageLayoutProps> = () => {
  const navigate = useNavigate()

  const handleHomeClick = () => {
    navigate('/')
  }

  return (
    <div className='page-layout-container'>
      <div>
        <Button type='primary' onClick={handleHomeClick}>返回首页</Button>
      </div>
      <div style={{ height: '100%', width: '100%', display: 'flex' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default PageLayout
