import { connectToDb } from "@utils/database";
import { Prompt } from "@models/prompt";

export const POST = async (req, res) => {
  const { prompt, userId, tag } = await req.json();

  try{
    await connectToDb();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });

    await newPrompt.save();

    return new Response("Prompt created", { status: 201 });
  }
  catch(error){
    return new Response("Failed to creare new prompt", { status: 500 });
  }
}