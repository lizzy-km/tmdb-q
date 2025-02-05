import { useDispatch } from "react-redux";
import {
  setHeaderEl,
  setMainEl,
  setNavEl,
} from "../redux/services/animateSlice";

const SetElement = (ref, type) => {
  let headerEl = null;
  let navEl = null;
  let mainEl = null;
  let scrollUp = true || ref;

  switch (type) {
    case "header":
      headerEl = ref?.current;

      break;

    case "nav":
      navEl = ref?.current;

      break;
    case "main":
      mainEl = ref?.current;

      break;

      case "scroll":
        scrollUp = ref;
  
        break;

    default:
      break;
  }

  return {
    headerEl,
    navEl,
    mainEl,
    scrollUp,
  };
};

export default SetElement;
