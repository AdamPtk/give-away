import ReactPaginate from 'react-paginate';
import {useState} from "react";

const HomeCooperationContent = ({description, items}) => {
    const [pageNum, setPageNum] = useState(0);

    const itemsPerPage = 3;
    const pagesVisited = pageNum * itemsPerPage;

    const displayItems = 
        items
            .slice(pagesVisited, pagesVisited + itemsPerPage)
            .map(item => {
                return (
                    <div className="item" key={item.id}>
                        <div className="name">
                            <h3>{item.name}</h3>
                            <p>{item.mission}</p>
                        </div>
                        <div className="examples">
                            <p>{item.examples}</p>
                        </div>
                    </div>
                );
            });

    const pageCount = Math.ceil(items.length / itemsPerPage);

    const changePage = ({selected}) => setPageNum(selected);

    return (
        <div className="content">
            <p>{description}</p>
            <div className="items">
                {displayItems}
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    activeLinkClassName={"paginationActiveLink"}
                />
            </div>
        </div>
    );
}

export default HomeCooperationContent;