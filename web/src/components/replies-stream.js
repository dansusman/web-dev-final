import ReplyItem from "./reply-item";

const RepliesStream = ({ replies }) => {
  return (
    <>
      {replies.map((r) => (
        <ReplyItem reply={r}></ReplyItem>
      ))}
    </>
  );
};

export default RepliesStream;
