export default async function getSingleData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 10,
    },
  });
  return res.json();
}
