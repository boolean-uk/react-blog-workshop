import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticlePage from "./pages/ArticlePage";
import Navigation from "./pages/components/Navigation";
import CreateArticlePage from "./pages/CreateArticlePage";
import EditArticlePage from "./pages/EditArticlePage";

/*
- formatting - prettier, eslint + format on save settings in vscode
- organising the code to have state, computed properties, functions

- fetch with error handling
- conditional rendering to do a whole block
- displaying that it's fetching in the UI before navigating etc...
- reusing Form
*/

function App() {
  // show all page
  // create one more page
  // view one / edit one page
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:postId" element={<ArticlePage />} />
        <Route path="/articles/create" element={<CreateArticlePage />} />
        <Route path="/articles/:postId/edit" element={<EditArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
