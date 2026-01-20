/**
 * Tính điểm cho câu trả lời
 * @param {boolean} isCorrect - Trả lời đúng hay sai
 * @param {number} timeSpent - Thời gian trả lời (giây)
 * @returns {number} - Điểm số
 */
export const calculateScore = (isCorrect, timeSpent) => {
  if (!isCorrect) return 0;

  const baseScore = 100;
  let timeBonus = 0;

  if (timeSpent <= 5) {
    timeBonus = 50;
  } else if (timeSpent <= 7) {
    timeBonus = 40;  
  } else if (timeSpent <= 10) {
    timeBonus = 30;
  } else if (timeSpent <= 12) {
    timeBonus = 20;
  } else if (timeSpent <= 15) {
    timeBonus = 15;
  } else if (timeSpent <= 17) {
    timeBonus = 10;
  } else if (timeSpent <= 20) {
    timeBonus = 5;
  }

  return baseScore + timeBonus;
};
