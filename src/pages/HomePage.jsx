import ArticlesList from "./components/ArticlesList";

function HomePage() {
  // limit to 5 articles
  return (
    <>
      <h1>Welcome to my awesome micro blog</h1>
      <p>Lots of interesting articles for you to read</p>
      <h2>Latest Posts</h2>
      <ArticlesList limit={3} />
    </>
  );
}

export default HomePage;
