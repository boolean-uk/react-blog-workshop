import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/articles">All Articles</Link>
      <Link to="/articles/create">New Article</Link>
    </div>
  );
}

export default Navigation;
