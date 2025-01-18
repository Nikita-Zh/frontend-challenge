import Image from "next/image";
import styles from "./ImageItem.module.css";

type Props = {
  url: string;
  alt: string;
  isLiked: boolean;
  onLike: (...args: never[]) => void;
};

export const ImageItem = ({ url, alt, isLiked, onLike }: Props) => {
  return (
    <div className={styles.image}>
      <Image
        src={url}
        fill
        sizes="100%"
        alt={alt}
        style={{ objectFit: "cover", background: "#999" }}
        quality={50}
      />
      <button
        className={`${styles.like_button} ${
          isLiked ? styles["is-liked"] : ""
        } `}
        onClick={onLike}
      ></button>
    </div>
  );
};
