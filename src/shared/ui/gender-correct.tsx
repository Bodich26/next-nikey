type Props = {
  gender?: string;
  type: "titles" | "normal";
};

export const GenderCorrect = ({ gender, type }: Props) => {
  if (!gender) return null;

  const normalized = gender.toLowerCase();
  const isSpecial = normalized === "men" || normalized === "women";

  if (type === "titles") {
    if (gender === "unisex") {
      return <>{gender.toUpperCase()}</>;
    }

    const formatted = isSpecial
      ? (gender.charAt(0).toUpperCase() + gender.slice(1) + "'s").toUpperCase()
      : gender.toUpperCase();

    return <>{formatted}</>;
  }

  if (type === "normal") {
    if (gender === "unisex") {
      return <>{gender.toUpperCase()}</>;
    }

    const formatted = isSpecial
      ? gender.charAt(0).toUpperCase() + (gender.slice(1) + "'s").toLowerCase()
      : gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase();

    return <>{formatted}</>;
  }

  return null;
};
