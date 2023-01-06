import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function LoadMore() {
    const state = useContext(GlobalState)
    const [page, setPage] = state.productsAPI.page
    const [result] = state.productsAPI.result

    return (
        <div className='landing1stBtns' id="load_more">
            {
                result < page * 9 ? ""
                : <a onClick={() => setPage(page+1)}><span>Load more</span></a>
            }
        </div>
    )
}

export default LoadMore
