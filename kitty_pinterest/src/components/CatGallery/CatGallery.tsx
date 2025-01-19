"use client";
import { useCallback, useEffect, useState } from "react";
import { ImageItem } from "../ImageItem/ImageItem";
import { useLikeCat, useInfiniteScroll } from "@/hooks";
import { CatResponseItem, useGetCatsApi } from "@/hooks/api";

import styles from "./CatGallery.module.css";

export const CatGallery = () => {
  const [data, setData] = useState<CatResponseItem[]>([]);
  const { fetchData, isError, isLoading } = useGetCatsApi();
  const { likedCats, handleLikeCat } = useLikeCat();

  const handleFetchData = useCallback(() => {
    fetchData({}).then((res) => {
      setData((prev) => [...prev, ...res]);
    });
  }, [fetchData]);

  useInfiniteScroll({
    selector: `.${styles.container}>div:last-child`,
    onFetch: handleFetchData,
    isLoading: isLoading,
  });

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  return (
    <>
      <div className={styles.container}>
        {data.map((item, index) => {
          return (
            <ImageItem
              key={`${item.id}-${index}`}
              onLike={(evt) => handleLikeCat(evt, item)}
              url={item.url}
              alt={item.breeds[0]?.alt_names || " "}
              isLiked={likedCats.some((likedCat) => likedCat.id === item.id)}
            />
          );
        })}
      </div>
      {data.length === 0 && isLoading && (
        <div className={styles.message}>... загружаем котиков ...</div>
      )}
      {data.length !== 0 && isLoading && (
        <div className={styles.message}>... загружаем еще котиков ...</div>
      )}
      {isError && !isLoading && (
        <div className={styles.message_error}>
          Не смогли загрузить котиков, попробовать снова:
          <button className={styles.load_button} onClick={handleFetchData}>
            Загрузить котиков
          </button>
        </div>
      )}
    </>
  );
};
