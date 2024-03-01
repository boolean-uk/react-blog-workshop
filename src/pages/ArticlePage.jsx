import { useEffect, useState } from "react";
import { getRequest } from "../api";
import { useNavigate, useParams } from "react-router-dom";

function ArticlePage() {
  // state
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  // navigation
  const { postId } = useParams();
  const navigate = useNavigate();

  // on load: fetch articles
  useEffect(() => {
    const runEffect = async () => {
      const { data, error } = await getRequest(`/post/${postId}`);
      if (error === null) {
        setArticle(data);
      } else {
        // display error
        console.log(error);
      }
      setLoading(false);
    };
    runEffect();
  }, [postId]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <h1>{article.title}</h1>
          <button onClick={() => navigate(`/articles/${article.id}/edit`)}>
            Edit
          </button>
          <p>{article.content}</p>
        </>
      )}
    </>
  );
}

export default ArticlePage;
