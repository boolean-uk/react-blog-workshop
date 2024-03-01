# Requirements

- create a website for managing micro blog posts
- / homepage should be a feed of the last 5 + a welcome message
  - HomePage
    - ArticlesList limit to top 5
      state: articles array
      prop: limit = 5
      on load, we fetch articles with limit 5
- /articles should show a list of articles
  - ArticlesPage no limit
    - ArticlesList
      state: articles array
      prop: limit = null
      on load, we fetch articles without limit
- /articles/:id should show a specific blog
  - ArticlePage
    state: store the article for rendering
    useParams to get id
    on load, fetch article
- /articles/create should allow me to create a new post
  - CreateArticlePage
    state: formState
    on submit -> validate
    on submit success -> redirect to articlepage for newly created article

C -
R -
U
D
