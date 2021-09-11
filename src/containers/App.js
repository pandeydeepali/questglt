import React from 'react';
import { Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import './styles.css'; import '../App.css';
import rentalProducts from '../Mock/rental.json';
import { DisplayModal } from '../components/Modal';
import {AppLabel} from '../constants/AppLabel'
import {columns} from '../components/Column';
const defaultSorted = [{
  dataField: 'name',
  order: 'asc'
}]

function App() {
  const [show, setShow] = React.useState(false);
  const [singleSelections, setSingleSelections] = React.useState([]);
  const [singleSelectionsType, setSingleSelectionsType] = React.useState([]);
  const [price, setPrice] = React.useState('');
  const [showconfirmBook, setshowConfirmBook] = React.useState(false)
  const [showReturn, setReturn] = React.useState(false)
  const [returnConfirm, setReturnConfirm] = React.useState(false)

  const bookProduct = () => {
    setShow(true)
  }

  const returnProduct = () => {
    setReturn(true)
  }

  const closePopup = () => {
    setShow(false)
    setshowConfirmBook(false)
    setReturn(false)
    setReturnConfirm(false)
  }

  const handleBooking = () => {
    setShow(false)
    setshowConfirmBook(true)

  }

  const handleConfirmBooking = () => {
    setshowConfirmBook(false)
  }

  const setPriceValue = (e) => {
    setPrice(e.target.value)
  }

  const handleConfirmReturn = () => {
    setReturnConfirm(true)
    setReturn(false)
  }

  const handleConfirm = () => {
    setReturnConfirm(false)
  }

  let noDataStr = "No Data Found";
  return (
    <React.Fragment>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-side">
        <BootstrapTable keyField='name' striped hover data={rentalProducts} columns={columns} noDataIndication={noDataStr}
          wrapperClasses="rental-grid" defaultSorted={defaultSorted} defaultSortDirection={defaultSorted ? defaultSorted[0].order : 'desc'} filter={filterFactory()} />
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 horizontal-button">
        <Button variant="outline-dark" size="sm" onClick={() => bookProduct()}>{AppLabel.book}</Button>
        <span></span>
        <Button variant="outline-dark" size="sm" onClick={() => returnProduct()}>{AppLabel.return}</Button>
      </div>
      <DisplayModal show={show} title={AppLabel.bookingTitle} firstBtn={AppLabel.no} secondBtn={AppLabel.yes} type="booking" handleClose={closePopup} handleProcessData={handleBooking}
        singleSelections={singleSelections} setSingleSelections={setSingleSelections} singleSelectedType={singleSelectionsType} setSelectedType={setSingleSelectionsType}
        price={price} onChange={(e) => setPriceValue(e)} />

      <DisplayModal show={showconfirmBook} title={AppLabel.bookingconfirmation} firstBtn={AppLabel.no} secondBtn={AppLabel.yes} type="bookingConfirmation" handleClose={closePopup}
        estimatedPrice={price} handleProcessData={handleConfirmBooking} />

      <DisplayModal show={showReturn} returntitle={AppLabel.returnTitle} firstBtn={AppLabel.no} secondBtn={AppLabel.yes} type="return" handleClose={closePopup}
        handleProcessData={handleConfirmReturn} onChange={(e) => setPriceValue(e)} />

      <DisplayModal show={returnConfirm} returntitle={AppLabel.returnConfirm} firstBtn={AppLabel.confirm} type="returnConfirm" handleClose={closePopup}
        handleProcessData={handleConfirm} totalPrice={price} />
    </React.Fragment>

  );
}

export default App;
