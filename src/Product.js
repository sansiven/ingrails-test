import React, { useRef } from "react";
import { Col, Container, ListGroup, Row, Button } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "./components/actions/cartActions";

function Product() {
    let params = useParams();

    let quantityRef = useRef()

    const dispatch = useDispatch();

    const productslist = useSelector((state) => state.products);

    let viewedProduct = productslist.find((item) => item.id == params.productId);
    console.log(productslist);

    const handleClick = (id) => {
        let quantity = parseInt(quantityRef.current.value)
        console.log(quantity)
        dispatch(addToCart(id, quantity));
    };

    return (
        <Container className="product-page">
            <Row className="product-row">
                <Col md={4}>
                    <div className="item-img">
                        <img
                            src={viewedProduct.image}
                            alt={viewedProduct.name}
                            className="cart-product-image"
                        />
                    </div>
                </Col>
                <Col md={8}>
                    <ListGroup>
                        {/* console.log(index, input, viewedProduct[input]) */}
                        {Object.keys(viewedProduct).map((input, index) =>
                            input == "id" ||
                            input == "image" ||
                            input == "quantity" ? null : (
                                <ListGroup.Item key={viewedProduct.id}>
                                    {input}:- {viewedProduct[input]}
                                </ListGroup.Item>
                            )
                        )}
                    </ListGroup>
                </Col>
            </Row>
            <Row className="atc-row">
                <Button
                    className="atc-btn"
                    onClick={() => handleClick(viewedProduct.id)}
                >
                    Add To Cart
                </Button>
                <input className="input-qty" ref={quantityRef} placeholder="Enter Quantity"></input>
            </Row>
        </Container>
    );
}

export default Product;
