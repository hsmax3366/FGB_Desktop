# Esports Website - Development Environment

A secure, fast, and visually stunning esports website built with Next.js, PostgreSQL, and Redis.

## 🚀 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: PostgreSQL 15 with Prisma ORM
- **Caching**: Redis 7
- **Authentication**: NextAuth.js v5
- **Package Manager**: pnpm
- **Development**: Docker Compose

## 📋 Prerequisites

- Node.js 18+ 
- Docker & Docker Compose
- pnpm (installed globally)

## 🛠️ Setup Instructions

### 1. Clone and Install Dependencies
```bash
cd esports-website
pnpm install
```

### 2. Start Development Services
```bash
# Start PostgreSQL and Redis
docker-compose up -d

# Verify containers are running
docker ps
```

### 3. Environment Configuration
Create `.env.local` file with:
```env
DATABASE_URL="postgresql://esports_user:esports_password@localhost:5432/esports_db"
REDIS_URL="redis://localhost:6379"
NEXTAUTH_SECRET="your-secret-key-here-change-in-production"
NEXTAUTH_URL="http://localhost:3000"
NODE_ENV="development"
```

### 4. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Open Prisma Studio (optional)
npx prisma studio
```

### 5. Start Development Server
```bash
pnpm dev
```

The application will be available at: http://localhost:3000

## 🗄️ Database Models

- **User**: Authentication and user management
- **Team**: Esports teams with tags and descriptions
- **Match**: Game matches between teams with scores and status

## 🔧 Development Commands

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Type checking
pnpm type-check
```

## 🐳 Docker Services

- **PostgreSQL**: Port 5432 (esports_db)
- **Redis**: Port 6379

## 📁 Project Structure

```
esports-website/
├── src/
│   ├── app/           # Next.js app router
│   ├── components/    # React components
│   └── lib/          # Utility libraries
├── prisma/           # Database schema
├── lib/              # Shared utilities
├── docker-compose.yml # Development services
└── .env.local        # Environment variables
```

## 🔒 Security Features

- NextAuth.js for authentication
- Input validation with Zod
- Secure database connections
- Environment variable protection

## 🚀 Next Steps

1. Implement authentication flows
2. Create API endpoints for teams/matches
3. Build responsive UI components
4. Add real-time features with WebSockets
5. Implement caching strategies
6. Add testing suite

## 📞 Support

For development issues, check:
- Docker container status: `docker ps`
- Database connection: `npx prisma db push`
- Redis connection: Test with Redis CLI
- Next.js logs: Check terminal output
