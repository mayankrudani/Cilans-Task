import { connect } from "react-redux";
import Navbar from "../../components/layout/navbar";

const mapStateToProps = (state: any) => ({
    data: state.cartitems
})

const mapDispatchToprops = () => ({
})

export default connect(mapStateToProps, mapDispatchToprops)(Navbar)