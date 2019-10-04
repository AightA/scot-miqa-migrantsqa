export function formatingDate(date) {
  const event = new Date(date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  };

  return event.toLocaleDateString("en-GB", options);
}
