export interface BlogPost {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  author: {
    name: string;
    createdAt: string;
  };
  createdAt: string;
} 