export const Style = (icon: string) => {
  switch (icon) {
    case "deposits":
      return {
        icon: "solar:card-send-bold",
        color: "bg-lightprimary",
        text: "text-primary",
      };
    case "withdraws":
      return {
        icon: "solar:card-recive-bold",
        color: "bg-lightwarning",
        text: "text-warning",
      };
    case "send":
      return {
        icon: "solar:course-up-line-duotone",
        color: "bg-lightsecondary",
        text: "text-secondary",
      };
    default:
      return {
        icon: "solar:course-down-line-duotone",
        color: "bg-lightinfo",
        text: "text-info",
      };
  }
};
