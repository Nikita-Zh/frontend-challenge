'use client'

import styles from "./CatGalleryLiked.module.css";
import { ImageItem } from "../ImageItem/ImageItem";
import { useLikeCat } from "@/hooks";

export const CatGalleryLiked = () => {
  const { likedCats, handleLikeCat } = useLikeCat();

  return (
    <div className={styles.container}>
      {likedCats.map((item, index) => {
        return (
          <ImageItem
            key={`${item.id}-${index}`}
            onLike={(evt) => handleLikeCat(evt, item)}
            url={item.url}
            alt={item.breeds[0]?.alt_names || ""}
            isLiked={likedCats.some((likedCat) => likedCat.id === item.id)}
          />
        );
      })}
    </div>
  );
};
