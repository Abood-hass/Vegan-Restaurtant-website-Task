import './App.css';
import HomeView from './Sections/HomeView/HomeView';
import AboutView from './Sections/AboutView/AboutView'
import SpecialView from './Sections/SpecialView/SpecialView';
import KitchenView from './Sections/KitchenView/KitchenView';
import AdView from './Sections/AdView/AdView';
import IngredientsView from './Sections/IngredientsView/IngredientsView';
import NumberView from './Sections/NumbersView/NumberView';
import ReviewsView from './Sections/ReviewsView/ReviewsView';
import BlogsView from './Sections/BlogsView/BlogsView';
import FooterView from './Sections/FooterViwe/FooterView';
import RegisterView from './Sections/RegisterView/RegisterView';
import CopyRightView from './Components/CopyRightView/CopyRightView';


function App() {
  return (
    <div className="App">
      <HomeView />
      <AboutView />
      <SpecialView />
      <KitchenView />
      <AdView />
      <IngredientsView />
      <NumberView />
      <ReviewsView />
      <BlogsView />
      <FooterView />
      <RegisterView />
      <CopyRightView />
    </div>
  );
}

export default App;
