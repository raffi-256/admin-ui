export const getPosts = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error("Gagal mengambil data post");
    }

    const posts = await response.json();

    return posts;
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error;
  }
};