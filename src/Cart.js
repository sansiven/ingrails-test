import React, { Component } from "react";
import { Col, Container, ListGroup, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
    removeItem,
    addQuantity,
    subtractQuantity,
} from "./components/actions/cartActions";
import Shipping from "./Shipping";

class Cart extends Component {
    //to remove the item completely
    handleRemove = (id) => {
        console.log("remove clicked", id);
        this.props.removeItem(id);
    };

    //to addd the quantity
    handleAddQuantity = (id) => {
        console.log("add clicked");
        this.props.addQuantity(id);
    };

    //to subtract quantity
    handleSubtractQuantity = (id) => {
        console.log("sub clicked");
        this.props.subtractQuantity(id);
    };

    render() {
        console.log(this.props.items)
        let addedItems = this.props.items.map((item) => {
            return (
                <>
                    {console.log(item)}
                    <ListGroup.Item key={item.id}>
                        <Container>
                            <Row>
                                <Col md={4}>
                                    <div className="item-img">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="cart-product-image"
                                        />
                                    </div>
                                </Col>
                                <Col md={8}>
                                    <div className="item-desc">
                                        <span className="title">
                                            {item.name}
                                        </span>
                                        <p>{item.desc}</p>
                                        <p>
                                            <b>Price: {item.price}$</b>
                                        </p>
                                        <p>
                                            <b>Quantity: <i
                                                class="fas fa-caret-up"
                                                onClick={() =>
                                                    this.handleAddQuantity(
                                                        item.id
                                                    )
                                                }
                                            ></i>
                                            {item.quantity}
                                            <i
                                                class="fas fa-caret-down"
                                                onClick={() =>
                                                    this.handleSubtractQuantity(
                                                        item.id
                                                    )
                                                }
                                            ></i>
                                            </b>
                                        </p>
                                        <Button
                                            variant="outline-danger"
                                            onClick={() =>
                                                this.handleRemove(item.id)
                                            }
                                            className="waves-effect waves-light btn pink remove"
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </ListGroup.Item>
                </>
            );
        });

        return (
            <div className="container">
                {this.props.items.length ? (
                    <>
                        <div className="cart">
                            <h5>You have ordered:</h5>
                            <ListGroup>{addedItems}</ListGroup>
                        </div>
                        <Shipping />
                    </>
                ) : (
                    <p>Hurry up! Add Something</p>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => {
            dispatch(removeItem(id));
        },
        addQuantity: (id) => {
            dispatch(addQuantity(id));
        },
        subtractQuantity: (id) => {
            dispatch(subtractQuantity(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
