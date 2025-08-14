# Portfolio Website API Contracts

## Backend Implementation Requirements

### 1. Contact Form API
**Endpoint**: `POST /api/contact`
**Purpose**: Handle contact form submissions and send email notifications

**Request Body**:
```json
{
  "name": "string (required, min 2 chars)",
  "email": "string (required, valid email)",
  "subject": "string (required, min 5 chars)", 
  "message": "string (required, min 10 chars)"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**Error Response**:
```json
{
  "success": false,
  "message": "Error description",
  "errors": ["field validation errors"]
}
```

### 2. Portfolio Data API (Optional Enhancement)
**Endpoint**: `GET /api/portfolio`
**Purpose**: Serve portfolio data dynamically instead of mock data

**Response**: Portfolio data structure matching mock.js format

## Frontend Integration Changes

### Mock Data Removal
- Remove hardcoded mock data from Contact.jsx
- Replace mock form submission with actual API call
- Add proper loading states and error handling
- Integrate toast notifications with API responses

### Dark Theme Implementation
- Add ThemeProvider context for theme management
- Implement theme toggle in header
- Update all components to support dark/light modes
- Follow reference site's dark theme color scheme
- Persist theme preference in localStorage

### API Integration
- Update Contact form to use backend endpoint
- Add axios interceptors for error handling
- Implement proper loading states
- Add form validation feedback

## Database Schema (MongoDB)

### Contact Messages Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String, 
  subject: String,
  message: String,
  createdAt: Date,
  ipAddress: String,
  userAgent: String,
  status: String // 'new', 'read', 'replied'
}
```

## Environment Variables Needed
- EMAIL_SERVICE_API_KEY (for sending notifications)
- ADMIN_EMAIL (recipient for contact form submissions)
- CORS_ORIGIN (frontend URL)

## Implementation Priority
1. Contact form backend API with validation
2. Dark theme implementation
3. Frontend integration with backend
4. Email notification service
5. Portfolio data API (if needed)