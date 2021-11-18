import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import React, { Component } from "react";
import { Card, Container, Button, ListGroup, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import {
    addToCart,
    fetchProductDetail,
} from "./components/actions/cartActions";
import { Link } from "react-router-dom";

class App extends Component {
    render() {
        //console.log(this.props.products);
        let productList = this.props.products.map((product) => {
            return (
                <>
                    <Col key={product.id} md={product.hero ? '12' : null }>
                        <div className={`fade-in product-card ${product.hero ? "product-hero-img" : "product-img"}`}>
                            <Card style={ product.hero ? null : { width: "18rem" }}>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <b>Just at Rs.</b> {product.price}
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <Button variant="primary">
                                        <Link to={`/product/${product.id}`}>
                                            View Details
                                        </Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </>
            );
        });
        return (
            <Container>
                <h3 className="center">Our Items</h3>
                <Row className="box">{productList}</Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {
            dispatch(addToCart(id));
        },
        fetchProductDetail: (id) => {
            dispatch(fetchProductDetail(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
