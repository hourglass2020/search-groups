import { useContext } from "react";
import { isEmpty } from "lodash";
import { Pagination } from "@mui/material";

import { GroupContext } from "../../context/groupContext";

function SearchPagination() {
    const {
        groups,
        setPageCount,
        pageCount,
        lastPage
    } = useContext(GroupContext);

    return (
        <>
            {isEmpty(groups) ? null : (
                <Pagination
                    sx={{ my: 4 }}
                    count={lastPage}
                    page={pageCount}
                    onChange={(event, value) => setPageCount(value)}
                    color="primary"
                />
            )}
        </>
    );
}

export default SearchPagination;
