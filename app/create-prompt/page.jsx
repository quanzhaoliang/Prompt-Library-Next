"use client";

import {useState} from 'react';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import Form from '@components/Form';

const CreatePrompt = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    const CreatePrompt = async (e) => {
      e.preventDefault(); //Stop the default form submission
      setSubmitting(true);

      try{
        const response = await fetch('/api/prompt/new', {
          method: 'POST',
          body: JSON.stringify({ //Send the prompt to the server to be saved in the database
            userId: session?.user.id,
            prompt: post.prompt,
            tag: post.tag,
          }),
        });
        if (response.ok){
          router.push('/'); //Once the prompt is created, redirect to the home page
        }
      }
      catch(error){
        console.log(error);
        console.log('Failed to create prompt');
      }
      finally{
        setSubmitting(false);
      }
    }

  return (
    <Form
    type="Create"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={CreatePrompt}
    />
  )
}

export default CreatePrompt;