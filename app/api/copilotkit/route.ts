import { CopilotRuntime, OpenAIAdapter, copilotRuntimeNextJSAppRouterEndpoint } from '@copilotkit/runtime'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
  defaultHeaders: { 'HTTP-Referer': 'https://nba-ai-oracle.vercel.app', 'X-Title': 'NBA AI Oracle' },
})

const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
  runtime: new CopilotRuntime(),
  serviceAdapter: new OpenAIAdapter({ openai, model: 'minimax/minimax-m1' }),
  endpoint: '/api/copilotkit',
})

export const POST = handleRequest
export const GET = handleRequest
