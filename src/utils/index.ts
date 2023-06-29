// Calculate age of the player based on dob
export const calculateAge = (dob: number | null | undefined) => {
  if (dob) {
    const ageDifMs = Date.now() - dob;
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  return 0;
};

export const formatDate = (timestamp: number | null | undefined) => {
  if (timestamp) {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  }
  return 0;
};
