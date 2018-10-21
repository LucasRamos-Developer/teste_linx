import React, { Component } from 'react';
import renderHTML from 'react-render-html';

class ProductCard extends Component {

    renderOldPrice (price) {
        let html = '';
        if (price != null) {
            html = 
                <span className="old">
                    De: {price}
                </span>
        }
        return html;
    }

    render() {
        return (
            <div className="ProductCard">
                <div className="ProductCard-inner">
                    <a href={this.props.data.detailUrl} title={this.props.data.name} className="ProductCard-link link-box block">
                        <span className="ProductCard-image block">
                            <img src={this.props.data.imageName} alt={this.props.data.name}/>
                        </span>
                        <span className="ProductCard-details block">
                            <span className="ProductCard-details_name line">
                                 {this.props.data.name}
                            </span>
                            
                            <span className="ProductCard-details_price line">
                                {this.renderOldPrice(this.props.data.oldPrice)}
                                <span className="sale">
                                    <b>Por:</b> {this.props.data.price}
                                </span>    
                            </span>
                           
                            <span className="ProductCard-details_installment line">
                                {renderHTML(this.props.data.productInfo.paymentConditions)}
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        );
    }
}

export default ProductCard;