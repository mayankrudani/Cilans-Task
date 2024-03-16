import { connect } from "react-redux";
import CartLayout from "../../cart/template";
import { AddToCart, RemoveToCart, UpdateToCart } from "../../services/actions/action";

const mapStateToProps = (state: any) => ({
    data: state.cartitems,
    customer:state.Customer
})

const mapDispatchToprops = (dispatch: any) => ({
    addToCartHandler: (data: any) => dispatch(AddToCart(data)),
    updateToCartHandler: (data: any) => dispatch(UpdateToCart(data)),
    removeToCartHandler: (data: any) => dispatch(RemoveToCart(data)),
})

export default connect(mapStateToProps, mapDispatchToprops)(CartLayout)