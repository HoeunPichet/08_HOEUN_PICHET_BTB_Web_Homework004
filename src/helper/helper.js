export const formatDate = (dt, longDate = true) => {
  const date = new Date(dt);
  const longOption = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const shortOption = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  let formattedDate;
  if (longDate) formattedDate = date.toLocaleDateString("en-US", longOption);
  else formattedDate = date.toLocaleDateString("en-US", shortOption);
  return formattedDate;
};

export const checkField = (element, title) => {
  let status = false;
  const message = element.parentNode.querySelector("p");
  if (element.value) {
    element.classList.remove("border-red-500");
    message.innerText = "";
    status = true;
  } else {
    element.classList.add("border-red-500");
    message.innerText = title + " is required!";
  }

  return status;
};

export const checkDueDate = (element) => {
  // Get current date
  const date = new Date();
  const day =
    date.getUTCDate() < 10 ? "0" + date.getUTCDate() : date.getUTCDate();
  const month =
    date.getUTCMonth() + 1 < 10
      ? "0" + (date.getUTCMonth() + 1)
      : date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  const currentDate = year.toString() + month.toString() + day.toString();
  const dueDate = element.value.replaceAll("-", "");

  const message = element.parentNode.querySelector("p");
  let status = false;

  if (parseInt(currentDate) < parseInt(dueDate)) {
    element.classList.remove("border-red-500");
    message.innerText = "";
    status = true;
  } else {
    element.classList.add("border-red-500");
    message.innerText = "Due date must be greater than current date!";
  }

  return status;
};

export const countDay = (dueDate) => {
  const currentDate = new Date();
  const dueDateObj = new Date(dueDate);
  const differenceInMillis = dueDateObj - currentDate;
  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const daysUntilDue = Math.ceil(differenceInMillis / millisecondsInADay);

  let remainDay =
    daysUntilDue < 7
      ? daysUntilDue == 1
        ? daysUntilDue + " day left"
        : daysUntilDue + " days left"
      : Math.floor(daysUntilDue % 7) > 0
      ? Math.floor(daysUntilDue % 7) == 1
        ? Math.floor(daysUntilDue % 7) + " day left"
        : Math.floor(daysUntilDue % 7) + " days left"
      : "";

  let remainWeek =
    daysUntilDue >= 7
      ? Math.floor(daysUntilDue / 7) == 1
        ? Math.floor(daysUntilDue / 7) + " week"
        : Math.floor(daysUntilDue / 7) + " weeks"
      : "";
  let finalWeek =
    daysUntilDue >= 7
      ? Math.floor(daysUntilDue % 7) == 0
        ? remainWeek + " left"
        : remainWeek + " and"
      : "";

  return finalWeek + " " + remainDay;
};
