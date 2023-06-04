import { Comment, User } from "../App";
import { CommentRoot } from "./CommentRoot";

type CommentsLayoutProps = {
  currentUser: User;
  comments: Comment[];
};

export function CommentsLayout({ currentUser, comments }: CommentsLayoutProps) {
  return (
    <div className="flex flex-col gap-4 mb-4">
      {comments.map((comment) => (
        <CommentRoot
          key={comment.id}
          currentUser={currentUser}
          comment={comment}
        />
      ))}
    </div>
  );
}
