import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
          publishedAt,
          author->{
            name
          },
          body,
          categories[]->{
            title
          }
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  const truncateText = (body, maxLength) => {
    if (
      !body ||
      !body[0] ||
      !body[0].children ||
      !body[0].children[0] ||
      !body[0].children[0].text
    ) {
      return "No content available";
    }
    const text = body[0].children[0].text;
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <main className="bg-white min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl font-bold flex justify-center mb-4">
          Blog Page
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to Our blog posts
        </h2>
        <div className="space-y-12">
          {postData &&
            postData.map((post, index) => (
              <article key={index} className="max-w-3xl">
                <Link to={"/post/" + post.slug.current}>
                  <div className="flex flex-col">
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-96 object-cover rounded-lg mb-4"
                    />
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-800 hover:text-gray-600">
                        {post.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>{formatDate(post.publishedAt)}</span>
                        <span>·</span>
                        <span>
                          {post.author ? post.author.name : "Unknown Author"}
                        </span>
                      </div>
                      <p className="text-gray-600">
                        {truncateText(post.body, 150)}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500">🏷️</span>
                        <span className="text-gray-600">
                          {post.categories && post.categories[0]
                            ? post.categories[0].title
                            : "Uncategorized"}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}