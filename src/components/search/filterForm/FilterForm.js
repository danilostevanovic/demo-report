import React from 'react';
import CurrentDataView from './currentDataView/CurrentDataView';
import DatePicker from './datePicker/DatePicker';
import ResetFilterButton from '../buttons/ResetFilterButton';
import getContact from '../../../selectors/contacts';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';


class FilterForm extends React.Component {
  render() {
    return (
      <div className="filterForm__wrapper">
        <div>
          <Grid fluid={true}>
            <Row>
              <Col md={4} sm={12}>
                <CurrentDataView {...this.props.contacts[0]} />
              </Col>
              <Col md={4} sm={12}>
                <DatePicker />
              </Col>
              <Col md={4} sm={12} >
                <ResetFilterButton />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: getContact(state.contacts, state.filters)
  }
}

export default connect(mapStateToProps)(FilterForm);