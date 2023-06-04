import { Comment, User } from "../App";
import { CommentRepliesLayout } from "./CommentRepliesLayout";
import { UserComment } from "./UserComment";

type CommentRootProps = {
  comment: Comment;
  currentUser: User;
};

export function CommentRoot({ currentUser, comment }: CommentRootProps) {
  return (
    <>
      <UserComment currentUser={currentUser} comment={comment} />
      {comment.replies.length > 0 && (
        <CommentRepliesLayout
          currentUser={currentUser}
          replies={comment.replies}
        />
      )}
    </>
  );
}
