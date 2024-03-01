import PropTypes from "prop-types";
import { useState } from "react";

const DEFAULT_FORM_DATA = {
  title: "",
  content: "",
  contactId: 1,
};

// this is a generic form
// if article prop !== null/undefined, then we set article as the initial form data
// indicating we are in "edit mode"
// submitCallback is a function we pass in, the function takes in a payload
// and the function returns an error or null so that the ArticleForm knows if the operation was successful
// this allows us to pass a createArticle(payload) or editArticle(payload) functions that have the respective
// logic to Create or Update the article
function ArticleForm({ submitCallback, article }) {
  const [formData, setFormData] = useState(
    article ? article : { ...DEFAULT_FORM_DATA }
  );
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState("");

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitCallback(formData).then((err) => {
      if (err) {
        setError(err);
      }
      setPosting(false);
    });
    setPosting(true);
    setError("");
  };

  const titleValid = formData.title.length > 0;
  const contentValid = formData.content.length > 0;

  return (
    <>
      <form onSubmit={handleSubmit}>
        {!titleValid && (
          <label style={{ color: "red" }}>
            Title must have at least 1 character.
          </label>
        )}
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleFormInputChange}
          disabled={posting}
        />
        <textarea
          type="textarea"
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleFormInputChange}
          disabled={posting}
        />
        <button disabled={posting}>Submit</button>
      </form>
      {posting && <p>Submitting post...</p>}
      {error.length > 0 && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

ArticleForm.propTypes = {
  submitCallback: PropTypes.func.isRequired,
  article: PropTypes.object,
};

export default ArticleForm;
