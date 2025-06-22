import { useState, useEffect } from "react";
import useAxiosPrivate from "helpers/useAxiosPrivate";

export default function useHandlePage(meta, setPosts, setMeta) {
  const axiosPrivate = useAxiosPrivate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = meta.totalPages;
  const limit = parseInt(meta.limit);
  const offset = parseInt(meta.offset);
  const startIndex = offset * limit;

  async function handlePageChange(newPage) {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);

      const offset = newPage - 1;

      const response = await axiosPrivate.get(
        `/post?limit=${meta.limit}&offset=${offset}&order=DESC`
      );

      setPosts(response.data.data);
      setMeta(response.data.meta);
    }
  }

  return {
    currentPage,
    totalPages,
    handlePageChange,
    startIndex,
  };
}
