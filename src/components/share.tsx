import { Share2 } from "lucide-react";
import React from "react";

type Props = {
  recipe: string;
};

const ShareButton = ({ recipe }: Props) => {
  const handleClick = React.useCallback(
    (recipe: string) => {
      const base64Recipe = btoa(recipe);
      const params = { share: base64Recipe };
      const searchParams = new URLSearchParams(params);
      window.location.search = searchParams.toString();
    },
    [recipe]
  );

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        handleClick(recipe);
      }}
      className="rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-300 p-1"
    >
      <Share2 size={16} />
    </button>
  );
};

export { ShareButton };
