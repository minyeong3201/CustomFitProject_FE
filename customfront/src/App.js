import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main0 from './page/main0';
import Main2 from './page/main2';
import Main3 from './page/main3';
import First from './page/first';
import Login from './page/login';
import Login2 from './page/login2';
import Logincomplete from './page/logincomplete';
import Membership from './page/membership';
import Review from './page/review';
import Reviewcheck1 from './page/reviewcheck1';
import Reviewcheck2 from './page/reviewcheck2';
import Reviewcheck3 from './page/reviewcheck3';
import Info1 from './page/info1';
import Info2 from './page/info2';
import Info3 from './page/info3';
import Info4 from './page/info4';
import Info5 from './page/info5';
import Changeinfo from './page/changeinfo';
import Changeinfo1 from './page/changeinfo1';
import Changeinfo3 from './page/changeinfo3';
import Changeinfo4 from './page/changeinfo4';
import Changeinfo5 from './page/changeinfo5';
import Mypage from './page/mypage';
import Pwchange from './page/pwchange';
import Pwchange1 from './page/pwchange1';
import Alarm1 from './page/alarm1';
import Alarm2 from './page/alarm2';
import Alarm3 from './page/alarm3';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<First />} />  {/* 기본 경로 처리 */}
          <Route path="/Main2" element={<Main2 />} /> 
          <Route path="/Main0" element={<Main0 />} />
          <Route path="/Main3" element={<Main3 />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Login2" element={<Login2 />} />
          <Route path="/Logincomplete" element={<Logincomplete />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Reviewcheck1" element={<Reviewcheck1 />} />
          <Route path="/Reviewcheck2" element={<Reviewcheck2 />} />
          <Route path="/Reviewcheck3" element={<Reviewcheck3 />} />
          <Route path="/Info1" element={<Info1 />} />
          <Route path="/Info2" element={<Info2 />} />
          <Route path="/Info3" element={<Info3 />} />
          <Route path="/Info4" element={<Info4 />} />
          <Route path="/Info5" element={<Info5 />} />
          <Route path="/Changeinfo" element={<Changeinfo />} />
          <Route path="/Changeinfo1" element={<Changeinfo1 />} />
          <Route path="/Changeinfo3" element={<Changeinfo3 />} />
          <Route path="/Changeinfo4" element={<Changeinfo4 />} />
          <Route path="/Changeinfo5" element={<Changeinfo5 />} />
          <Route path="/Mypage" element={<Mypage />} />
          <Route path="/Pwchange" element={<Pwchange />} />
          <Route path="/Pwchange1" element={<Pwchange1 />} />
          <Route path="/Alarm1" element={<Alarm1 />} />
          <Route path="/Alarm2" element={<Alarm2 />} />
          <Route path="/Alarm3" element={<Alarm3 />} />
          
        </Routes>
      </div>
    </Router>
  );
}
export default App;