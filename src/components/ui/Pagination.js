import React from 'react';

const Pagination = ({postPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    //Count maximum amount of pages based on amount of items we received from API
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);    
    }

    return(
        <div className="d-flex justify-content-center">
            <ul className="pagination mt-5 ">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="#" className="page-link text-success">
                           {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination;