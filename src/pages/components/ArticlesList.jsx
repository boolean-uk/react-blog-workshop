import { useEffect, useState } from "react";
import { getRequest } from "../../api";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ArticlesList({ limit }) {
  // state
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // on load: fetch articles
  useEffect(() => {
    // because we need to await getRequest, we need to wrap our code in an async function
    // and then call it within useEffect
    const runEffect = async () => {
      const { data, error } = await getRequest("/post");
      if (data) {
        // no error -> successful response
        let finalisedArticles = data;
        // reduce the received articles to the limit
        if (limit) {
          finalisedArticles = data.filter((article, index) => index < limit);
        }
        setArticles(finalisedArticles);
      } else {
        // Todo: display error
        console.log(error);
      }
      setLoading(false);
    };
    runEffect();
  }, [limit]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div>
          {articles.map((article) => {
            return (
              <div key={article.id}>
                <h3>
                  <Link to={`/articles/${article.id}`}>{article.title}</Link>
                </h3>
                <p>{article.content}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

ArticlesList.propTypes = {
  limit: PropTypes.number,
};

export default ArticlesList;
