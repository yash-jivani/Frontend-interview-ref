import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRipple,
    MDBRow,
    MDBTooltip,
    MDBTypography,
    MDBListGroupItem,
    MDBListGroup,
} from "mdb-react-ui-kit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartTotal } from "../slices/cartSlice";


export default function Cart() {
    const { cartList, totalPrice, totalQuntity } = useSelector(
        (store) => store.cart
    );
    const dispatch = useDispatch()
    dispatch(cartTotal())
    return (
        <section className='h-100 gradient-custom'>
            <MDBContainer className='py-5 h-100'>
                <MDBRow className='justify-content-center my-4'>
                    <MDBCol md='8'>
                        <MDBCard className='mb-4'>
                            <MDBCardHeader className='py-3'>
                                <MDBTypography tag='h5' className='mb-0'>
                                    Cart - 2 items
                                </MDBTypography>
                            </MDBCardHeader>
                            <MDBCardBody>
                                {/* Map */}
                                {cartList.map((item) => (
                                    <MDBRow key={item.id}>
                                        <MDBCol
                                            lg='3'
                                            md='12'
                                            className='mb-4 mb-lg-0'
                                        >
                                            <MDBRipple
                                                rippleTag='div'
                                                rippleColor='light'
                                                className='bg-image rounded hover-zoom hover-overlay'
                                            >
                                                <img
                                                    src={item.img}
                                                    className='w-100'
                                                    alt={item.title}
                                                />
                                                <a href='#!'>
                                                    <div
                                                        className='mask'
                                                        style={{
                                                            backgroundColor:
                                                                "rgba(251, 251, 251, 0.2)",
                                                        }}
                                                    ></div>
                                                </a>
                                            </MDBRipple>
                                        </MDBCol>

                                        <MDBCol
                                            lg='5'
                                            md='6'
                                            className=' mb-4 mb-lg-0'
                                        >
                                            <p>
                                                <strong>{item.title}</strong>
                                            </p>

                                            <MDBTooltip
                                                wrapperProps={{ size: "sm" }}
                                                wrapperClass='me-1 mb-2'
                                                title='Remove item'
                                            >
                                                <MDBIcon fas icon='trash' />
                                            </MDBTooltip>

                                            <MDBTooltip
                                                wrapperProps={{
                                                    size: "sm",
                                                    color: "danger",
                                                }}
                                                wrapperClass='me-1 mb-2'
                                                title='Move to the wish list'
                                            >
                                                <MDBIcon fas icon='heart' />
                                            </MDBTooltip>
                                        </MDBCol>
                                        <MDBCol
                                            lg='4'
                                            md='6'
                                            className='mb-4 mb-lg-0'
                                        >
                                            <div
                                                className='d-flex mb-4'
                                                style={{ maxWidth: "300px" }}
                                            >
                                                <MDBBtn className='px-3 me-2'>
                                                    <MDBIcon fas icon='minus' />
                                                </MDBBtn>

                                                <MDBInput
                                                    value={item.quantity}
                                                    min={0}
                                                    type='number'
                                                    label='Quantity'
                                                />

                                                <MDBBtn className='px-3 ms-2'>
                                                    <MDBIcon fas icon='plus' />
                                                </MDBBtn>
                                            </div>

                                            <p className='text-start text-md-center'>
                                                <strong>{item.price}</strong>
                                            </p>
                                        </MDBCol>
                                    </MDBRow>
                                ))}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4'>
                        <MDBCard className='mb-4'>
                            <MDBCardHeader>
                                <MDBTypography tag='h5' className='mb-0'>
                                    Summary
                                </MDBTypography>
                            </MDBCardHeader>
                            <MDBCardBody>
                                <MDBListGroup flush>
                                    <MDBListGroupItem className='d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
                                        <div>
                                            <strong>Total amount</strong>
                                            <strong>
                                                <p className='mb-0'>
                                                    (including VAT)
                                                </p>
                                            </strong>
                                        </div>
                                        <span>
                                            <strong>{totalPrice}</strong>
                                        </span>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className='d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
                                        <div>
                                            <strong>Total Quantity</strong>
                                            <strong>
                                                <p className='mb-0'></p>
                                            </strong>
                                        </div>
                                        <span>
                                            <strong>{totalQuntity}</strong>
                                        </span>
                                    </MDBListGroupItem>
                                </MDBListGroup>

                                <MDBBtn block size='lg'>
                                    Go to checkout
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
