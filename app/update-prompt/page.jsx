"use client";

import { useEffect, useState} from 'react';
import {useRouter, useSearchParams } from 'next/navigation';
import Form from '@components/Form';

const UpdatePrompt = () => {
    const router = useRouter();

    const searchParams = useSearchParams();

    const promptId = searchParams.get("id");

    const [submitting, setSubmitting] = useState(false);

    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    useEffect(() => {
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`);
            const data = await response.json();

            setPost({
                prompt: data.prompt,
                tag: data.tag,
            });
        }
        if (promptId) getPromptDetails();
    }, [promptId]);

    const updatePrompt = async (e) => {
      e.preventDefault(); //Stop the default form submission
      setSubmitting(true);

      if (!promptId) return alert('Prompt ID is missing');

      try{
        const response = await fetch(`/api/prompt/${promptId}`, {
          method: 'PATCH',
          body: JSON.stringify({ //Send the prompt to the server to be saved in the database
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
    type="Edit"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={updatePrompt}
    />
  )
}

export default UpdatePrompt;