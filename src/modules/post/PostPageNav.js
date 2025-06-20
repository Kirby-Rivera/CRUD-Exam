import { Pagination, PaginationLink, PaginationItem } from "reactstrap";
import styles from "./Post.module.scss";

function PageNav(props) {
  const { currentPage, totalPages, handlePageChange } = props;

  return (
    <Pagination className={styles["page-nav"]}>
      <PaginationLink
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </PaginationLink>
      <PaginationLink>
        Page {currentPage} of {totalPages}
      </PaginationLink>
      <PaginationLink
        next
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </PaginationLink>
    </Pagination>
  );
}

export default PageNav;
