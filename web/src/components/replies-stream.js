import ReplyItem from "./reply-item";

const RepliesStream = ({ replies, post }) => {
    return (
        <>
            {replies.map((r, index) => {
                return (
                    <ReplyItem key={index} reply={r} post={post}></ReplyItem>
                );
            })}
        </>
    );
};

export default RepliesStream;
