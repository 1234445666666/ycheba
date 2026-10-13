import { notFound } from "next/navigation";
import BackButton from "./Back";

interface Article {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Props {
  params: Promise<{ id: string }>;
}

async function fetchArticle(id: string): Promise<Article | null> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const article = await fetchArticle(id);

  if (!article) {
    return {
      title: "Статья не найдена",
    };
  }

  return {
    title: article.title,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;
  const article = await fetchArticle(id);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <BackButton />

      <article>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </article>
    </div>
  );
}
