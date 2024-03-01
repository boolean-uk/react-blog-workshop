import { Routes, Route } from "react-router-dom";
import "./App.css";

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
      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/articles" element={<h1>ArticlesPage</h1>} />
        <Route path="/articles/:id" element={<h1>Article Page</h1>} />
        <Route path="/articles/create" element={<h1>Create Article Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
