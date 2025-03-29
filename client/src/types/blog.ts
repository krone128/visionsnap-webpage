export interface BlogPost {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
  author: {
    id: number;
    name: string;
  };
  createdAt: string;
  published: boolean;
} 