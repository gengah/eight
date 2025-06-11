import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image,
            publishedAt
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div className="text-center text-gray-600 text-xl mt-12">Loading...</div>;

  // Format the published date to DD/MM/YYYY
  const publishedDate = new Date(singlePost.publishedAt).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <main className="bg-white min-h-screen p-10 md:p-12 pt-30">
      <article className="container mx-auto">
        {/* Header Section */}
        <header className="container mx-auto pt-20">
          <div className="bg-gray-100 p-4 md:p-8 text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-blue-900 uppercase p-5">
              {singlePost.title}
            </h1>
          </div>

          {/* Left-Aligned Main Image */}
          <div className="flex justify-start pt-10">
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              className="w-full md:w-3/4 object-cover"
              style={{ height: "400px" }}
            />
          </div>

          {/* Metadata */}
          <div className="flex justify-start items-center py-2">
            <div className="flex items-center space-x-4 text-gray-600 text-sm">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                {publishedDate}
              </span>
              <span>{singlePost.name}</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
     <div className="custom-prose px-4 md:px-16 lg:px-48 py-8 md:py-12 prose prose-lg max-w-none text-gray-800">


 
  <BlockContent
            blocks={singlePost.body}
            projectId="31mci3g2"
            dataset="production"
            serializers={{}}
          />
        </div>
      </article>

      {/* Chat/Support Button */}
      <div className="fixed bottom-4 right-4 flex items-center space-x-2">
        <div className="bg-gray-800 text-white text-sm px-4 py-2 rounded-full shadow-lg">
          Got any questions? I’m happy to help!
        </div>
        <button className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
        </button>
      </div>
    </main>
  );
}