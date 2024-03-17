import { connect } from "react-redux";
import CartLayout from "../../components/cart/template";
import { RemoveToCart, UpdateToCart, GetCartDetails } from "../../services/actions/action";

const mapStateToProps = (state: any) => ({
    data: state.cartitems,
})

const mapDispatchToprops = (dispatch: any) => ({
    getCartHandler: (data: any) => dispatch(GetCartDetails(data)),
    updateToCartHandler: (data: any) => dispatch(UpdateToCart(data)),
    removeToCartHandler: (data: any) => dispatch(RemoveToCart(data)),
})

export default connect(mapStateToProps, mapDispatchToprops)(CartLayout)