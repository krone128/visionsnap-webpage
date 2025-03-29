# VisionSnap Website

A modern website for an AR and Computer Vision software development company.

## Features

- Modern, minimalistic design
- Portfolio showcase
- Blog system with image and video support
- Google OAuth authentication
- Role-based access control
- Contact form
- Solutions and services showcase

## Tech Stack

- Frontend: React with TypeScript
- Backend: Node.js with Express
- Database: PostgreSQL
- Authentication: Google OAuth + JWT
- File Storage: AWS S3
- Styling: Tailwind CSS

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- AWS Account (for S3 storage)
- Google Cloud Platform account (for OAuth)
- Docker and Docker Compose (for containerized deployment)

## Setup

### Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install        # Install server dependencies
   cd client
   npm install        # Install client dependencies
   ```

3. Create a PostgreSQL database:
   ```bash
   createdb visionsnap
   ```

4. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your configuration values

5. Start the development servers:
   ```bash
   # Start backend server
   npm run dev

   # In another terminal, start frontend server
   npm run client
   ```

### Docker Deployment

1. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your configuration values
   - Update the environment variables in `docker-compose.yml` with your values

2. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - PostgreSQL: localhost:5432

4. Stop the containers:
   ```bash
   docker-compose down
   ```

## Environment Variables

- `PORT`: Server port (default: 5000)
- `DATABASE_URL`: PostgreSQL connection URL
- `JWT_SECRET`: Secret key for JWT tokens
- `GOOGLE_CLIENT_ID`: Google OAuth client ID
- `GOOGLE_CLIENT_SECRET`: Google OAuth client secret
- `CLIENT_URL`: Frontend URL (default: http://localhost:3000)
- `AWS_ACCESS_KEY_ID`: AWS access key
- `AWS_SECRET_ACCESS_KEY`: AWS secret key
- `AWS_REGION`: AWS region
- `AWS_BUCKET_NAME`: S3 bucket name

## Project Structure

```
.
├── client/                 # React frontend
├── server/                 # Express backend
│   ├── entities/          # TypeORM entities
│   ├── routes/            # API routes
│   └── index.ts           # Server entry point
├── .env                   # Environment variables
├── docker-compose.yml     # Docker Compose configuration
├── Dockerfile.backend     # Backend Dockerfile
├── client/Dockerfile      # Frontend Dockerfile
└── package.json           # Project dependencies
```

## API Routes

### Authentication
- `POST /api/auth/google`: Google OAuth login
- `GET /api/auth/me`: Get current user

### Blog
- `GET /api/blog`: Get all published posts
- `GET /api/blog/:id`: Get single post
- `POST /api/blog`: Create new post (auth required)
- `PUT /api/blog/:id`: Update post (auth required)
- `DELETE /api/blog/:id`: Delete post (admin only)

### Portfolio
- `GET /api/portfolio`: Get all portfolio items
- `POST /api/portfolio`: Add portfolio item (admin only)
- `PUT /api/portfolio/:id`: Update portfolio item (admin only)
- `DELETE /api/portfolio/:id`: Delete portfolio item (admin only)

### Contact
- `POST /api/contact`: Send contact message

## License

MIT 