import { hoc } from "./../../utils/hoc";
import { useNotFoundProps } from "./notFound.props";

export const NotFound = hoc(useNotFoundProps, () => {
  return <h1>Not Found</h1>;
});
