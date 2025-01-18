import { CatResponseItem } from "@/hooks/api/useGetCatsApi";
import { MouseEvent, useEffect, useState } from "react";

const localVar = "likedCats";

export const useLikeCat = () => {
  const [likedCats, setLikedCats] = useState<CatResponseItem[]>([]);

  useEffect(() => {
    setLikedCats(() => {
      const savedLikes = localStorage.getItem(localVar);
      return savedLikes ? JSON.parse(savedLikes) : [];
    });
  }, []);

  const handleLikeCat = (
    evt: MouseEvent<HTMLButtonElement>,
    imgInfo: CatResponseItem
  ) => {
    const isLiked = likedCats.some((likedCat) => likedCat.id === imgInfo.id);
    if (isLiked) {
      const updatedLikes = likedCats.filter(
        (likedCat) => likedCat.id !== imgInfo.id
      );

      setLikedCats(updatedLikes);
      localStorage.setItem(localVar, JSON.stringify(updatedLikes));
    } else {
      const updatedLikes = [...likedCats, imgInfo];

      setLikedCats(updatedLikes);
      localStorage.setItem(localVar, JSON.stringify(updatedLikes));
    }
  };

  return { likedCats, handleLikeCat };
};
