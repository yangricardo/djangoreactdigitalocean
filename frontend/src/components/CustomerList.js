import  React, { Component } from  'react';
import CustomersService from '../services/CustomerService';

const  customersService  =  new  CustomersService();

class  CustomersList  extends  Component {

    constructor(props) {
        super(props);
        this.state  = {
            customers: [],
            nextPageURL:  ''
        };
        this.nextPage  =  this.nextPage.bind(this);
        this.handleDelete  =  this.handleDelete.bind(this);
    }

    componentDidMount() {
        var  self  =  this;
        customersService.getCustomers().then(function (result) {
            self.setState({ customers:  result.data, nextPageURL:  result.nextlink})
        });
    }
}
export  default  CustomersList;