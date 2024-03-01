// import { useState } from "react";
import { postRequest } from "../api";
import { useNavigate } from "react-router-dom";
import ArticleForm from "./components/ArticleForm";

function CreateArticlePage() {
  // navigation
  const navigate = useNavigate();

  async function submitCallback(payload) {
    return await postRequest("/post", payload).then(({ data, error }) => {
      if (data) {
        navigate(`/articles/${data.id}`);
        return null;
      } else {
        return error[0];
      }
    });
  }

  return (
    <div>
      <h1>Create a new Article</h1>
      <ArticleForm submitCallback={submitCallback} />
    </div>
  );
}

export default CreateArticlePage;
