import express from 'express';

import {
  createComment,
  // deleteComment,
  // editComment,
  getPostComments,
  // getcomments,
   likeComment,
} from '../controllers/comment.controller.js';
import { verifyToken } from '../utils/varifyUser.js';

const router = express.Router();


router.post('/create', verifyToken, createComment);
router.get('/getPostComments/:postId', getPostComments);
router.put('/likeComment/:commentId', verifyToken, likeComment);

export default router;