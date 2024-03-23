'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete}) => {

  const [copied, setCopied] = useState('');

  const handleCopy = () => {
    setCopied(post.prompt);
    // Copy the prompt to the clipboard
    navigator.clipboard.writeText(post.prompt);
    // Hide the copied message after 3 seconds
    setTimeout(() => {
      setCopied('');
    }, 3000);
  }

  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
          <Image
            src={post.creator.image}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />
          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-950'>
              {post.creator.username}
            </h3>
          </div>
        </div>

        <div className='copy_btn' onClick={handleCopy}>
          <Image
            src={copied === post.prompt ? '/assets/icons/copied.svg' : '/assets/icons/copy.svg'}
            width={20}
            height={20}
          />
        </div>
      </div>

      <p className='my-4 font-satoshi text-sm text-gray-600'>
        {post.prompt}
      </p>

      <p className='font-inter text-sm text-blue-800 cursor-pointer' onClick={()=> handleTagClick && handleTagClick}>
        {post.tag}
      </p>
    </div>
  )
}

export default PromptCard