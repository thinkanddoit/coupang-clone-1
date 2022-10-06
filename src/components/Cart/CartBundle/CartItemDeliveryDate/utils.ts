const getDayOfWeek = (date: string) => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const dayOfWeek = week[new Date(date).getDay()];

  return dayOfWeek;
};

export const dateFormat = (date: string) => {
  const today = new Date();
  const theDay = new Date(date);
  const difOfDay = theDay.getDay() - today.getDay();
  if (difOfDay === 1) {
    return `내일(${getDayOfWeek(
      date
    )}) ${theDay.getMonth()}/${theDay.getDate()} 도착`;
  } else if (difOfDay === 2) {
    return `모레(${getDayOfWeek(
      date
    )}) ${theDay.getMonth()}/${theDay.getDate()} 도착`;
  } else {
    return `${getDayOfWeek(
      date
    )}요일 ${theDay.getMonth()}/${theDay.getDate()} 도착`;
  }
};
