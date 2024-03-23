import { connectToDb } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();

  try{
    await connectToDb();  // connect to database
    const newPrompt = new Prompt({ // create new prompt
      creator: userId,
      prompt,
      tag
    });

    await newPrompt.save(); // save prompt to database

    return new Response(JSON.stringify(newPrompt), { status: 201 }); // return success response
  }
  catch(error){
    return new Response("Failed to creare new prompt", { status: 500 }); // return error response
  }
}