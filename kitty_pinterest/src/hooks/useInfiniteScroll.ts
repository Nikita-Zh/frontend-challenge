import { useEffect } from "react";

type Props = {
  selector: string;
  isLoading: boolean;
  onFetch: () => void;
};

export const useInfiniteScroll = ({ selector, isLoading, onFetch }: Props) => {
  useEffect(() => {
    const lastElement = document.querySelector(selector);

    if (lastElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !isLoading) {
            onFetch();
          }
        },
        {
          rootMargin: "0px",
          threshold: 0.5,
        }
      );

      observer.observe(lastElement);

      return () => {
        observer.unobserve(lastElement);
      };
    }
  }, [selector, isLoading, onFetch]);
};
