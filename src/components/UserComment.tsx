import { Comment, User } from "../App";

type UserCommentProps = {
  currentUser: User;
  comment: Comment;
};
type CommentActionProps = {
  isCurrentUser: boolean;
};
type CommentScoreProps = {
  score: number;
};

export function UserComment({ currentUser, comment }: UserCommentProps) {
  const { content, createdAt, score, user, replies } = comment;
  const isCurrentUser = currentUser.username === user.username;
  let replyingTo;
  if (replies) {
    replyingTo = replies.length > 0 ? comment.replyingTo : "";
  }
  return (
    <div className="relative md:static rounded-lg bg-white p-6 md:flex md:flex-row md:gap-5 md:items-start">
      {/* Score */}
      <CommentScore score={score} />
      {/* Username & comment */}
      <div className="w-full">
        <div className="flex gap-2 justify-between items-center mb-3">
          <div className="flex gap-4 items-center">
            <img
              src={user.image.png}
              alt="Username profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <h5 className="font-medium">
              {user.username}{" "}
              {currentUser && currentUser.username === user.username && (
                <span className="px-2 py-1 bg-indigo-600 text-indigo-50 text-xs">
                  you
                </span>
              )}
            </h5>
            <span className="text-gray-500">{createdAt}</span>
          </div>
          <CommentAction isCurrentUser={isCurrentUser} />
        </div>
        {/* Comment text */}
        <p className="text-gray-500 mb-11 md:mb-0">
          {replyingTo && (
            <span className="cursor font-semibold text-indigo-600">
              @{replyingTo}
            </span>
          )}{" "}
          {content}
        </p>
      </div>
    </div>
  );
}

function CommentAction({ isCurrentUser }: CommentActionProps) {
  if (!isCurrentUser) {
    return (
      <button className="absolute md:static bottom-5 right-6 text-indigo-600 font-medium text-sm flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-gray-100 transition-colors">
        <img src="/images/icon-reply.svg" /> Reply
      </button>
    );
  } else {
    return (
      <div className="absolute md:static bottom-5 right-6 flex gap-3">
        <button className="text-red-500 font-medium text-sm flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-gray-100 transition-colors">
          <img src="/images/icon-delete.svg" /> Delete
        </button>
        <button className="text-indigo-600 font-medium text-sm flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-gray-100 transition-colors">
          <img src="/images/icon-edit.svg" /> Edit
        </button>
      </div>
    );
  }
}

function CommentScore({ score }: CommentScoreProps) {
  return (
    <div className="absolute md:static bottom-4 left-5 flex-shrink-0 bg-gray-100 text-gray-400 rounded-lg p-2 md:py-4 md:px-0 w-max md:w-10 flex md:flex-col items-center gap-4">
      <button className="rounded-full p-1 hover:bg-gray-300 hover:bg-opacity-50 transition-colors">
        <img src="/images/icon-plus.svg" />
      </button>
      <span className="text-indigo-700 font-semibold">{score}</span>
      <button className="rounded-full py-2 px-1 hover:bg-gray-300 hover:bg-opacity-50 transition-colors">
        <img src="/images/icon-minus.svg" />
      </button>
    </div>
  );
}
