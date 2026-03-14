import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PlatformUser } from "@enterprise-commerce/core/platform/types"
import { createUser } from "../models/User"

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
  const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: 'Email and password are required' });
      return;
    }
  

  const newUser: PlatformUser = {
    id: null,
    email,
    password
  };
  const createdUser = await createUser(newUser); 

  const accessToken = jwt.sign(
    {
      id: createdUser.id,
      email: createdUser.email
    },
    process.env.JWT_SECRET || "no_key_set"
  );
    


  res.status(201).json(
    { user: createdUser, accessToken } 
  ); 
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }

};