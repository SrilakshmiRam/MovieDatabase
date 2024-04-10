import {Component} from 'react'

import './index.css'

class Pagination extends Component {
  state = {pageNo: 1}

  onClickPrevPage = () => {
    const {apiCallBack} = this.props

    this.setState(
      prevState => {
        if (prevState.pageNo > 1) {
          return {
            pageNo: prevState.pageNo - 1,
          }
        }
        return prevState
      },
      () => {
        const {pageNo} = this.state
        apiCallBack(pageNo)
      },
    )
  }

  onClickNextPage = () => {
    const {apiCallBack, totalPages} = this.props

    this.setState(
      prevState => {
        if (prevState.pageNo < totalPages) {
          return {pageNo: prevState.pageNo + 1}
        }
        return prevState
      },
      () => {
        const {pageNo} = this.state
        apiCallBack(pageNo)
      },
    )
  }

  render() {
    const {pageNo} = this.state
    return (
      <div className="pagination-data">
        <button type="button" onClick={this.onClickPrevPage}>
          Prev
        </button>
        <p className="pageno">{pageNo}</p>
        <button type="button" onClick={this.onClickNextPage}>
          Next
        </button>
      </div>
    )
  }
}

export default Pagination
