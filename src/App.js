import { Component } from 'react';
import './App.css';
import Loader from './Loader/Loader';
import Table from './Table/Table';
import _ from 'lodash'
import RowInformation from './RowInformation/RowInformation'
import ModeSelector from './ModeSelector/ModeSelector';
import ReactPaginate from 'react-paginate';
import Search from './Search/Search';

class App extends Component {

  state = {
    data: [],
    isFetched: false,
    fieldSort: null,
    sortMethod: 'asc',
    row: null,
    isModeSelected: false,
    currentPage: 0,
    search: ''
  }

  async onFetch(url) {

    const response = await fetch(url)
    const data = await response.json()
    
    this.setState({
      data,
      isFetched: true
    })
  }

  onSort = fieldSort => {

    let sortMethod = this.state.sortMethod
    if (sortMethod === 'asc') {
      sortMethod = 'desc'
    } else {
      sortMethod = 'asc'
    }

    let data = _.orderBy(this.state.data, fieldSort, sortMethod)
    this.setState({
      data,
      fieldSort,
      sortMethod
    })
  }

  openInformation = row => {
    this.setState({
      row
    })
  }

  onSelected = url => {
    this.setState({
      isModeSelected: true,
      isFetched: false
    })
    this.onFetch(url)
  }

  onChangePage = ({selected}) => {
    this.setState({
      currentPage: selected
    })
  }

  onSearch = value => {

    this.setState({
      search: value,
      currentPage: 0
    })
  } 

  getFilteredData() {
   const {data, search} = this.state

    if(!search){
      return data
    }

    return data.filter(item => {
      return item['firstName'].toLowerCase().includes(search.toLowerCase())
      || item['lastName'].toLowerCase().includes(search.toLowerCase())
      || item['email'].toLowerCase().includes(search.toLowerCase())
    })
  }

  render() {
    const filteredData = this.getFilteredData() 
    const pageSize = 50
    const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage]
    

    if (!this.state.isModeSelected) {
      return (
        <div className='container'>
          <ModeSelector onSelected={this.onSelected} />
        </div>
      )
    }

    const countOfPages = () => {
      return Math.ceil(filteredData.length / pageSize)
    }

    return (
      <div className='container'>
        {this.state.isFetched
          ? <>
          <Search
          onSearch={this.onSearch}
          />
          <Table
            data={displayData}
            onSort={this.onSort}
            sortMethod={this.state.sortMethod}
            fieldSort={this.state.fieldSort}
            openInformation={this.openInformation}
          />
          </>
          : <Loader />
        }

        {this.state.data.length > 50 
        ? <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'page-link'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        pageCount={countOfPages()}
        marginPagesDisplayed={2}
        forcePage={this.state.currentPage}
        pageRangeDisplayed={5}
        onPageChange={this.onChangePage}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
      : null
      }
        {this.state.row
          ? <RowInformation row={this.state.row} />
          : null
        }
      </div>
    )
  }
}

export default App;
