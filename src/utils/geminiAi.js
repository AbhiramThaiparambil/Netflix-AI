import { GoogleGenerativeAI } from "@google/generative-ai";
import {GEMINI_AI_KEY} from './GEMINI_AI_KEY'
const genAI = new GoogleGenerativeAI(GEMINI_AI_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });