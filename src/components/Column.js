import { textFilter } from 'react-bootstrap-table2-filter';
import {AppLabel} from '../constants/AppLabel'

export const columns = [{
    dataField: 'name',
    text: AppLabel.name,
    sort: true,
    filter: textFilter()
  }, {
    dataField: 'code',
    text: AppLabel.code,
    sort: true,
    filter: textFilter()
  }, {
    dataField: 'availability',
    text: AppLabel.availability,
    sort: true,
    filter: textFilter()
  }, {
    dataField: 'needing_repair',
    text: AppLabel.NeedtoRepair,
    sort: true,
    filter: textFilter()
  }, {
    dataField: 'durability',
    text: AppLabel.Durability,
    sort: true,
    filter: textFilter()
  }, {
    dataField: 'mileage',
    text: AppLabel.Mileage,
    sort: true,
    filter: textFilter()
  }
  ];