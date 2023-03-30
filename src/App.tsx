import { Route, Routes } from 'react-router-dom';
import './App.css';
import { PageLayout } from './components';
import BarBasicChart from './pages/bar/basic/bar_basic';
import BarHorizontalChart from './pages/bar/horizontal/bar_horizontal';
import BarMultiSeriesChart from './pages/bar/mutli_series/bar_multi_series';
import BarRealtimeChart from './pages/bar/realtime/bar_realtime';
import BarRealtimeSortedChart from './pages/bar/realtime_sorted/bar_realtime_sorted';
import BarSortedChart from './pages/bar/sorted/bar_sorted';
import BarTimeAxisChart from './pages/bar/time_axis/bar_time_axis';
import Home from './pages/home/home';
import LineBasicChart from './pages/line/basic/line_basic';
import LineCurveChart from './pages/line/curve/line_curve';
import LineFillBelowChart from './pages/line/fill_below/line_fill_below';
import LineMultiFillChart from './pages/line/multi_fill/line_multi_fill';
import LineMultiLineChart from './pages/line/mutil_series/line_multi_series';
import LineRealtimeChart from './pages/line/realtime/line_realtime';
import LineTimeAxisChart from './pages/line/time_axis/line_time_axis';
import MixedBasicLineBarChart from './pages/mixed/basic_line_bar/mixed_basic_line_bar';
import MixedRealtimeLineBarChart from './pages/mixed/realtime_line_bar/mixed_realtime_line_bar';
import PieBasicChart from './pages/pie/basic/pie_basic';
import PieDoughnutChart from './pages/pie/doughnut/pie_doughnut';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<PageLayout />}>
          <Route path='/line/basic' element={<LineBasicChart />} />
          <Route path='/line/curve' element={<LineCurveChart />} />
          <Route path='/line/fill_below' element={<LineFillBelowChart />} />
          <Route path='/line/multi_series' element={<LineMultiLineChart />} />
          <Route path='/line/multi_fill' element={<LineMultiFillChart />} />
          <Route path='/line/time_axis' element={<LineTimeAxisChart />} />
          <Route path='/line/realtime' element={<LineRealtimeChart />} />
          <Route path='/bar/basic' element={<BarBasicChart />} />
          <Route path='/bar/horizontal' element={<BarHorizontalChart />} />
          <Route path='/bar/multi_series' element={<BarMultiSeriesChart />} />
          <Route path='/bar/sorted' element={<BarSortedChart />} />
          <Route path='/bar/time_axis' element={<BarTimeAxisChart />} />
          <Route path='/bar/realtime' element={<BarRealtimeChart />} />
          <Route path='/bar/realtime_sorted' element={<BarRealtimeSortedChart />} />
          <Route path='/pie/basic' element={<PieBasicChart />} />
          <Route path='/pie/doughnut' element={<PieDoughnutChart />} />
          <Route path='/mixed/basic_line_bar' element={<MixedBasicLineBarChart />} />
          <Route path='/mixed/realtime_line_bar' element={<MixedRealtimeLineBarChart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
