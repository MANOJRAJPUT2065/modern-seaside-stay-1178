# JMD Project - JavaScript + Backend

## Project Structure

```
├── backend/           # Node.js/Express backend
│   ├── package.json
│   ├── server.js
│   └── README.md
├── src/              # React frontend (JavaScript)
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   └── lib/
└── package.json      # Frontend dependencies
```

## Setup Instructions

### Frontend:
```bash
npm install
npm run dev
```

### Backend:
```bash
cd backend
npm install
npm run dev
```

## Key Changes:
- ✅ Converted all TypeScript (.tsx/.ts) to JavaScript (.jsx/.js)
- ✅ Added Express.js backend with basic API structure
- ✅ Removed TypeScript syntax (types, interfaces, generics)
- ✅ Maintained all existing functionality

The project is now pure JavaScript with a separate backend folder for API development.
