import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FBForm from "./components/FBForm";
import AboutPage from './components/pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';


function App() {
    
    return (
        <FeedbackProvider>
            <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path='/' 
                    element = {
                        <>
                            <FBForm/>
                            <FeedbackStats/>
                            <FeedbackList/>
                        </>
                    }
                    />
                    <Route exact path='/about' element={<AboutPage/>}/> 
                </Routes>
                <AboutIconLink/>
            </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App;
