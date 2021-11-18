import React, { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { connect } from 'react-redux';

class Shipping extends Component{
    componentWillUnmount(){
        if(this.refs.shipping.checked){
            this.props.substractShipping()
        }
    }

    handleChecked = (e) => {
        if(e.target.checked){
            this.props.addShipping();
        }else{
            this.props.substractShipping();
        }
    }
    render(){
        return(
            <Container>
                <ListGroup>
                <ListGroup.Item className="collection-item">
                        <label>
                            <input type="checkbox" ref="shipping" onChange={e => this.handleChecked(e)} />
                            <span>Shipping(+Rs 200)</span>
                        </label>
                    </ListGroup.Item>   
                    <ListGroup.Item className="collection-item"><b>Total:Rs. {this.props.total} </b></ListGroup.Item>
                </ListGroup>
                <div className="checkout">
                    <button className="waves-effect waves-light btn">Checkout</button>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addShipping: () => dispatch({type: 'ADD_SHIPPING'}),
        substractShipping: () => dispatch({type: 'SUB_SHIPPING'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shipping)