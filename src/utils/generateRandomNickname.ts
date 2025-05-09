const adjectives = ["감성적인", "빛나는", "잔잔한", "따스한", "선명한"];
const themes = ["카메라", "필름", "장면", "프레임", "빛"];

export const generateRandomNickname = () => {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const theme = themes[Math.floor(Math.random() * themes.length)];
  const number = String(Math.floor(Math.random() * 1000)).padStart(3, "0");

  return `${adj}${theme}${number}`;
};