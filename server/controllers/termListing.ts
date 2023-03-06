/** source/controllers/termListing.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface TermListing {
  term: String;
  termLanguage: String;
  termContexts?: string[];
  outputLanguage: String;
}

// getting term definition
const getTermListing = async (req: Request, res: Response, next: NextFunction) => {
  let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/}`);
  let termListing: TermListing = result.data;
  return res.status(200).json({
    message: termListing
  });
};

export default { getTermListing };