export const getBackground = () => {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 12) return "/day.avif";
  if (hour >= 12 && hour < 18) return "/day.avif";
  if (hour >= 18 && hour < 20) return "/Evening.jpg";
  return "/Night_Sky.avif";
};