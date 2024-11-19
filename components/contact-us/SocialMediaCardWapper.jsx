export default function SocialMediaCardWapper({ posts }) {
  console.log(posts);
  return (
    <div>
      <h1>Instagram Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              <img src={post.media_url} alt={post.caption} />
            </a>
            <p>{post.caption}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
