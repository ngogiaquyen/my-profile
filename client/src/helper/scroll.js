export const scrollToBottom = (commentsEndRef) => {
  console.log(commentsEndRef)
  commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
};
