
export const fetchQuizData = async () => {
  try {
    const response = await fetch('/api/quiz', { method: 'GET' });
    const result = await response.json();
    return result.quiz;
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    return [];
  }
};
