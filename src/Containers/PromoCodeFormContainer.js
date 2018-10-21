import PromoCodeForm from '../Components/PromoCodeForm';
import { connect } from 'react-redux';
import { applyPromotion } from '../store/actions/promoCode';

export default connect(
  null,
  { applyPromotion }
)(PromoCodeForm);
