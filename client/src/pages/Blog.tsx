import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import BlogPost from '../components/BlogPost';
import LoadingSpinner from '../components/LoadingSpinner';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  videoUrl?: string;
  author: string;
  createdAt: string;
}

const Blog: React.FC = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blog');
        setPosts(response.data);
      } catch (err) {
        setError('Failed to fetch blog posts');
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-12">
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="section-title">Blog</h1>
        {user && (user.role === 'admin' || user.role === 'editor') && (
          <Link to="/blog/new" className="btn btn-primary">
            New Post
          </Link>
        )}
      </div>
      <div className="grid-layout">
        {posts.map((post) => (
          <article key={post.id} className="card">
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.content}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{post.author}</span>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="mt-4 flex space-x-4">
                <Link
                  to={`/blog/${post.id}`}
                  className="btn btn-primary btn-block"
                >
                  Read More
                </Link>
                {user && (user.role === 'admin' || user.role === 'editor') && (
                  <Link
                    to={`/blog/edit/${post.id}`}
                    className="btn btn-secondary btn-block"
                  >
                    Edit
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No blog posts available yet.</p>
        </div>
      )}
    </div>
  );
};

export default Blog; 