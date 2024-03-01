// import { useState } from "react";
import { getRequest, updateRequest } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import ArticleForm from "./components/ArticleForm";
import { useEffect, useState } from "react";

function EditArticlePage() {
  // state
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  // navigation
  const { postId } = useParams();
  const navigate = useNavigate();

  // on load: fetch article
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

  async function submitCallback(payload) {
    return await updateRequest(`/post/${payload.id}`, payload).then(
      ({ data, error }) => {
        if (data) {
          navigate(`/articles/${data.id}`);
          return null;
        } else {
          return error[0];
        }
      }
    );
  }

  return (
    <div>
      <h1>Edit Your Article</h1>
      {loading && <p>Loading...</p>}
      {!loading && (
        <ArticleForm submitCallback={submitCallback} article={article} />
      )}
    </div>
  );
}

export default EditArticlePage;
