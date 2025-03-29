import { Router } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';
import jwt from 'jsonwebtoken';

const router = Router();

// Get contact messages (admin only)
const authenticateAdmin = async (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { id: decoded.id } });

    if (!user || user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Send contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Here you would typically:
    // 1. Save the message to the database
    // 2. Send an email notification
    // 3. Integrate with a CRM system
    // For now, we'll just return a success message

    // Example email sending (you would need to set up an email service)
    /*
    await sendEmail({
      to: 'your-email@example.com',
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `
    });
    */

    res.json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending message' });
  }
});

// Get all messages (admin only)
router.get('/', authenticateAdmin, async (req, res) => {
  try {
    // Here you would typically fetch messages from the database
    // For now, we'll just return an empty array
    res.json([]);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching messages' });
  }
});

export default router; 