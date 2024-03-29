const getData = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  return res.json();
};

export default getData;
