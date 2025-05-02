export const useGenderCapitalized = (gender?: string) => {
  if (!gender || typeof gender !== "string") return "Unknown";

  return gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase();
};
