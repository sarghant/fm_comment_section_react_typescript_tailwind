import { User } from "../App";

type CommentFormProps = {
  currentUser: User;
};

export function CommentForm({ currentUser }: CommentFormProps) {
  return (
    <form>
      <div className="bg-white rounded-lg p-4 flex flex-row flex-wrap md:flex-nowrap gap-4 md:justify-center md:items-start">
        <img
          className="order-1 md:order-none rounded-full w-10 h-10 object-cover"
          src={currentUser.image.png}
          alt="User profile"
        />
        <textarea
          rows={3}
          placeholder="Add a comment..."
          className="flex-grow resize-none rounded w-full md:w-auto py-2 px-4 border border-gray-300 border-solid placeholder:text-gray-500"
        ></textarea>
        <button
          className="order-1 md:order-none ml-auto uppercase text-sm bg-indigo-600 text-indigo-50 rounded py-3 px-8
        hover:bg-indigo-500 transition-colors"
        >
          Send
        </button>
      </div>
    </form>
  );
}
