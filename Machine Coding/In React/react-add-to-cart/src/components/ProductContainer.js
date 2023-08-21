import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../slices/cartSlice";

export default function ProductContainer() {
    const items = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    return (
        <div className='m-2'>
            <MDBContainer>
                <MDBRow className='mb-3'>
                    {items.map((item) => (
                        <MDBCol size='md' key={item.id}>
                            <MDBCard>
                                <MDBCardImage
                                    src={item.img}
                                    position='top'
                                    alt='...'
                                />
                                <MDBCardBody>
                                    <MDBCardTitle>{item.title}</MDBCardTitle>
                                    <MDBCardText>{item.price}</MDBCardText>
                                    <MDBBtn
                                        onClick={() => {
                                            return dispatch(add(item));
                                        }}
                                    >
                                        Add to Cart
                                    </MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer>
        </div>
    );
}
