export async function loadingArticles(url: string) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("ошибка функции загрузки постов");
  }
}
