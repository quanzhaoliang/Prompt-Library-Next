import { connectToDb } from "@utils/database";
import Prompt  from "@models/prompt";

export const GET = async (request) => {
    try{
        await connectToDb();  // connect to database
        const prompts = await Prompt.find({}).populate('creator'); // get all prompts from database and populate creator field with user data
        return new Response(JSON.stringify(prompts), { status: 200 }); // return success response
    }
    catch{
        return new Response("Failed to fetch prompts", { status: 500 }); // return error response
    }
}