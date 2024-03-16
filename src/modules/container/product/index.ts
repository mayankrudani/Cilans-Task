import { connect } from "react-redux";
import ProductPreview from "../../components/product/template";
import { AddToCart } from "../../services/actions/action";

const mapStateToProps = () => ({
})

const mapDispatchToprops = (dispatch: any) => ({
    AddToCartHandler: (data: any) => dispatch(AddToCart(data))
})

export default connect(mapStateToProps, mapDispatchToprops)(ProductPreview)