
import { useState } from "react";
import { Button, Div } from "./Pagination.styled";

export function Pagination ({perPage, array, onPageButtonClick, onNextButtonClick, onPrevButtonClick}) {
    const [totalPages] = useState(Math.ceil(array.length/perPage));
    const [currentPage, setCurrentPage] = useState(1);
    
    const onPageClick = (e) => {
        const page = Number(e.target.textContent);
        setCurrentPage(page);
        const from = (page-1+(perPage-1)*(page-1));
        const to = (page-1 + perPage + (perPage-1)*(page-1));
        const cuttedArray = array.slice(from, to);
        onPageButtonClick(cuttedArray);
        window.scrollTo(0,0);
      };
      
      const onNextClick = () => {
        const page = currentPage + 1;
        setCurrentPage(page);
        const from = (page-1+(perPage-1)*(page-1));
        const to = (page-1 + perPage + (perPage-1)*(page-1));
        const cuttedArray = array.slice(from, to);
        onNextButtonClick(cuttedArray);
        window.scrollTo(0,0);
      };
      
      const onPrevClick = () => {
        const page = currentPage - 1;
        setCurrentPage(page);
        const from = (page-1+(perPage-1)*(page-1));
        const to = (page-1 + perPage + (perPage-1)*(page-1));
        const cuttedArray = array.slice(from, to);
        onPrevButtonClick(cuttedArray);
        window.scrollTo(0,0);
      };

    let pag = 0;
    let paginationArray = [];
    while(pag < totalPages) {
        pag +=1;
        paginationArray.push(pag);
    }; 

    return (
        <Div>
            <Button type="button" onClick={onPrevClick}>Prev</Button>
            {paginationArray.map(pag => {
                return (
                    <div key={pag}>
                       {/*  {currentPage===pag ?  
                        <Button type="button" disabled>{pag}</Button> :
                        <Button type="button" onClick={onPageClick}>{pag}</Button>} */}

<Button 
type="button" 
{...(currentPage===pag ? {disabled: true} : {onClick: onPageClick})}>{pag}
</Button>

                    </div>
                );
            })}
            <Button type="button" onClick={onNextClick}>Next</Button>
        </Div>
    );
};