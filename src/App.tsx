import { CommentForm } from "./components/CommentForm";
import { CommentsLayout } from "./components/CommentsLayout";
import { useFetchedData } from "./hooks/useFetchedData";
import { RotatingLines } from "react-loader-spinner";

export type Data = {
  currentUser: User;
  comments: Comment[];
};
type Image = {
  png: "string";
  webp: string;
};
export type User = {
  image: Image;
  username: string;
};
export type Comment = {
  id: number | string;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Comment[];
  replyingTo?: string;
};

function App() {
  const [data, error, isLoading] = useFetchedData();
  return (
    <div className="w-full sm:w-3/4 md:w-2/3 lg:w-3/5 xl:w-2/5 px-4 md:px-0 mx-auto mt-11">
      {isLoading && (
        <div className="flex justify-center">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      )}
      {error && typeof error === "string" && (
        <div className="rounded-lg bg-white p-4">{error}</div>
      )}
      {data && typeof data === "object" && (
        <>
          <CommentsLayout
            currentUser={data.currentUser}
            comments={data.comments}
          />
          <CommentForm currentUser={data.currentUser} />
        </>
      )}
    </div>
  );
}

export default App;
