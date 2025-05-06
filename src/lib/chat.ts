'use server';

import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const threadMap: { [key: string]: string } = {}; // temp in-memory map

export async function sendMessageAction(
  message: string,
  userId: string
): Promise<string> {
  if (!message || !userId) return 'Missing message or user ID';

  try {
    // Create or reuse a thread
    let threadId = threadMap[userId];

    if (!threadId) {
      const thread = await openai.beta.threads.create();

      threadId = thread.id;
      threadMap[userId] = threadId;
    }

    // Send the message
    await openai.beta.threads.messages.create(threadId, {
      role: 'user',
      content: message,
    });

    // Start the assistant run
    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: process.env.OPENAI_ASSISTANT_ID!,
    });

    // Poll run status until complete (simple version)
    let runStatus;
    let retries = 10;

    while (retries-- > 0) {
      runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
      if (runStatus.status === 'completed') break;
      await new Promise((r) => setTimeout(r, 1000));
    }

    const messages = await openai.beta.threads.messages.list(threadId);
    const assistantMessage = messages.data.find(
      (msg) => msg.role === 'assistant'
    );

    const reply =
      assistantMessage?.content.find((c) => c.type === 'text')?.text?.value ||
      'No response from assistant.';

    console.log(reply);

    return reply;
  } catch (err: any) {
    console.error('[OpenAI Error]', err);

    return 'Something went wrong.';
  }
}
