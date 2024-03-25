import { connectToDb } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
    try{
        await connectToDb();  // connect to database
        
        const prompts = await Prompt.find({ creator: params.id }).populate('creator'); // get all prompts from database and populate creator field with specific user 

        return new Response(JSON.stringify(prompts), { status: 200 }); // return success response
    }
    catch(error){
        return new Response("Failed to fetch prompts", { status: 500 }); // return error response
    }
}