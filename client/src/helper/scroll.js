export const scrollToBottom = (commentsEndRef) => {
  commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
};
