import { Comment, User } from "../App";
import { UserComment } from "./UserComment";

type CommentRepliesLayoutProps = {
  currentUser: User;
  replies: Comment[];
};

export function CommentRepliesLayout({
  currentUser,
  replies,
}: CommentRepliesLayoutProps) {
  return (
    <div className="relative">
      <div
        className="absolute w-1 rounded-sm bg-gray-200"
        style={{ height: "95%" }}
      ></div>
      <div className="flex flex-col gap-4 ml-10">
        {replies.map((reply) => (
          <UserComment
            key={reply.id}
            currentUser={currentUser}
            comment={reply}
          />
        ))}
      </div>
    </div>
  );
}
