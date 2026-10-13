import { loadingArticles } from "./components/ArticlesBackend";

export default async function ArticlesPage() {
  const URL: string = "https://jsonplaceholder.typicode.com/posts?_limit=10";

  const articles = await loadingArticles(URL);
  return (
    <div>
      <h1>skebob</h1>
      <ul>
        {articles?.map((a) => (
          <li key={a.id}>
            <a href={`/articles/${a.id}`}>{a.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
