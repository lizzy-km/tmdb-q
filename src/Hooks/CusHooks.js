import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export async function fetchData(page, endPointUrl) {
  const key = import.meta.env.VITE_DEV_API_KEY;
  const BASE_URL = import.meta.env.VITE_DEV_API_URL;
  const response = await fetch(
    `${BASE_URL}/${endPointUrl}?api_key=${key}&page=${page}`
  );
  const data = await response.json();
  if (page > 1) {
    return { ...data };
  } else {
    return data;
  }
}

export function IsLastElementOnView (ref){
    const [isVisible,setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsVisible(entry.isIntersecting);
          },
          { threshold: 0.5 } // Triggers when 50% of the element is in view
        );
    
        if (ref.current) {
          observer.observe(ref.current);
        }
    
        return () => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        };
      }, []);

      return {isVisible};
}

export function GetInfiniteData(
  endPointUrl,
  type
) {
  const { data, fetchNextPage } = useInfiniteQuery(
    ["trending", type],
    ({ pageParam = 1 }) => fetchData(pageParam, endPointUrl),
    {
      getNextPageParam: ({ page = 1 }) => {
        return page + 1;
      },
    }
  );

  const nextPage = () => {
    fetchNextPage();
  };

 

  return { data, nextPage };
}
