import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import StatBanner from './components/stat_banner/StatBanner';
import Courses from './components/courses/Courses';
import OrgDesc from './components/org_desc/OrgDesc';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Banner></Banner>
        <StatBanner></StatBanner>
        <Courses></Courses>
        <OrgDesc></OrgDesc>
        <Footer></Footer>
    </div>
  );
}

export default App;
