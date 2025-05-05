export const formatTime = (timestamp: string | number | Date) => {
  const now = new Date();
  const messageDate = new Date(timestamp);

  const diff = now.getTime() - messageDate.getTime();
  const diffMinutes = Math.floor(diff / 60000);

  if (diffMinutes < 1) return 'Just now';

  return messageDate.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};
