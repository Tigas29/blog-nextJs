import { getPosts } from "./_services/notion";
import Link from "next/link";
import Image from "next/image";
export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="w-full bg-slate-800 min-h-screen">
      <div className="m-auto max-w-2xl bg-slate-700 p-6 min-h-screen">
        <h1 className="text-4xl py-6">Blog</h1>

        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-3">
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post.imgUrl}
                  width={500}
                  height={200}
                  alt="Picture of the author"
                  priority
                />
                <h2>{post.title}</h2>
                <p>{post.preview}</p>
                <p>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(post.createdAt)
                  )}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
