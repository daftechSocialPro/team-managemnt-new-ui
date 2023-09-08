const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const createImagePath = (imagePath) => {
  const response = `${API_BASE_URL}/${imagePath}`;

  return response;
};

<<<<<<< HEAD
=======

>>>>>>> e6b4ef86450cd4e9bc533b05b42e0e9bab8af2b4
export function calculateEmploymentLength(startDate) {
  const employmentStartDate = new Date(startDate);
  const currentDate = new Date();

  const yearsDiff = currentDate.getFullYear() - employmentStartDate.getFullYear();
  const monthsDiff = currentDate.getMonth() - employmentStartDate.getMonth();

<<<<<<< HEAD
  let employmentLength = "";

  if (yearsDiff > 0) {
    employmentLength += `${yearsDiff} year${yearsDiff > 1 ? "s" : ""}`;
  }

  if (monthsDiff > 0) {
    employmentLength += `${employmentLength ? " " : ""}${monthsDiff} month${
      monthsDiff > 1 ? "s" : ""
    }`;
  }

  return employmentLength || "No employment length data available";
}
=======
  let employmentLength = '';

  if (yearsDiff > 0) {
    employmentLength += `${yearsDiff} year${yearsDiff > 1 ? 's' : ''}`;
  }

  if (monthsDiff > 0) {
    employmentLength += `${employmentLength ? ' ' : ''}${monthsDiff} month${monthsDiff > 1 ? 's' : ''}`;
  }

  return employmentLength || 'No employment length data available';
}
>>>>>>> e6b4ef86450cd4e9bc533b05b42e0e9bab8af2b4
