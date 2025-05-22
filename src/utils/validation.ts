export const validatePassword = (password: string): boolean => {
  const lengthCheck = password.length >= 10;
  const english = /[a-zA-Z]/.test(password);
  const number = /\d/.test(password);
  const special = /[^a-zA-Z0-9]/.test(password);
  const comboCheck = [english, number, special].filter(Boolean).length >= 2;
  return lengthCheck && comboCheck;
};

export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePasswordMatch = (
  password: string,
  confirmPassword: string
): boolean => {
  return password === confirmPassword;
};
