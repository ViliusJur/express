import './App.css';
import {
    Routes,
    Route,
    BrowserRouter,
  } from 'react-router-dom';
import IndexPage from './RegLog/pages/IndexPage';
import UserPage from './RegLog/pages/UserPage';
import AllPostsPage from './RegLog/pages/AllPostsPage';
import CreatePostPage from './RegLog/pages/CreatePostPage';



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<IndexPage />} />
                <Route path="/userprofile" index element={<UserPage />} />
                <Route path="/allpost" index element={<AllPostsPage/>}/>
                <Route path="/createpost" index element={<CreatePostPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

