import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { sendContactEmail } from './email';

const app = express();
const PORT = process.env.PORT || 4000;

// CORS setup
const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:5173';
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl) or matching origins
      if (!origin || origin === allowedOrigin || process.env.NODE_ENV !== 'production') {
        callback(null, true);
      } else {
        callback(new Error('CORS not allowed'));
      }
    },
    methods: ['POST', 'GET', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
);

app.use(express.json());

// Rate Limiter: max 5 messages per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    error: 'Too many contact requests from this IP. Please try again after 15 minutes.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Contact form endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Input Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields (name, email, message) are required.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address.',
      });
    }

    if (name.length > 100 || message.length > 5000) {
      return res.status(400).json({
        success: false,
        error: 'Content length exceeds allowed limit.',
      });
    }

    // Send Email
    await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error: any) {
    console.error('Error handling contact submission:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again later or contact directly.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
