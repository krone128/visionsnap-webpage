import React from 'react';
import { Link } from 'react-router-dom';

interface Author {
  id?: string;
  name: string;
  email: string;
}

interface BlogPostProps {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  videoUrl: string;
  author: Author;
  createdAt: string;
  preview?: boolean;
}

const BlogPost: React.FC<BlogPostProps> = ({
  id,
  title,
  content,
  imageUrl,
  videoUrl,
  author,
  createdAt,
  preview = false
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderContent = () => {
    if (preview) {
      return content.length > 200 ? `${content.substring(0, 200)}...` : content;
    }
    return content;
  };

  const renderVideo = () => {
    if (!videoUrl) return null;

    const videoId = videoUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];
    if (!videoId) return null;

    return (
      <div className="relative pb-[56.25%] h-0 mb-6">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  };

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">
          {preview ? (
            <Link to={`/blog/${id}`} className="hover:text-primary-600">
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <span>{author.name}</span>
          <span className="mx-2">•</span>
          <span>{formatDate(createdAt)}</span>
        </div>
        {renderVideo()}
        <div className="prose max-w-none">
          {renderContent()}
        </div>
        {preview && (
          <Link
            to={`/blog/${id}`}
            className="inline-block mt-4 text-primary-600 hover:text-primary-700"
          >
            Read more →
          </Link>
        )}
      </div>
    </article>
  );
};

export default BlogPost; 