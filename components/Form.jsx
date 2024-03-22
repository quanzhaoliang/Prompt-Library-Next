import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col sm:text-6xl">
      <h1 className="mt-5 text-5xl font-extrabold">
        <span className="blue_gradient">{type} Prompt</span>
      </h1>
      <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl">
        {type} and share amazing prompts with the world!
      </p>
      <form className="mt-10 w-full max-w-2xl flex flex-col gap-7 galssmorphism" onSubmit={handleSubmit}>
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
           value={post.prompt}
           onChange={(e) => setPost({...post, prompt: e.target.value})}
           placeholder="Write your prompt here..."
           className="form_textarea"
           required></textarea>
        </label>

        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag
          </span>

          <input
           value={post.tag}
           onChange={(e) => setPost({...post, tag: e.target.value})}
           placeholder="Write your tag here...  (ex. #product, #JavaScript, #Next.js...)"
           className="form_input"
           required></input>
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-sky-600 rounded-full text-white">
            {submitting? `${type}...` : type}
          </button>
          <Link href='/' className="text-gray-500 text-sm">
            Cancel
          </Link>
        </div>
      </form>
    </section>
  )
};

export default Form;
