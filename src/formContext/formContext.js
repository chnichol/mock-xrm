import ui from "./ui/ui";
import data from "./data";

const formContext = {
  ui: ui,
  data: data,
  getAttribute: () => {},
  getControl: () => {},
};

export default formContext;
