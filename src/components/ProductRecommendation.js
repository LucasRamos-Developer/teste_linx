import React, { Component } from 'react';
import ProductCard from './ProductCard';
import Slider from "react-slick";
//import ScriptCache from '../utility/ScriptCache';
import Script from 'react-load-script';

class ProductRecommendation extends Component {
    constructor () {
        super();
        this.state = {
            isLoad: true,
            product: {},
            recommendation: []
        }
    }

    handleScriptCreate () {
        const self = this;
        window.X = function (response) {
            let data = response.data;
            console.log(data);
            self.setState({
                isLoad: false,
                product: data.reference.item,
                recommendation: data.recommendation
            });
        }
    }

    renderProduct () {
        let html = '';
        if (this.state.isLoad) {
            html =
                <div className="loading"></div>
        }
        else {
            html = 
                <ProductCard key={this.state.product.businessId} data={this.state.product}/>
        }
        return html;
    }

    renderSlider () {
        let html = '';
        if (this.state.isLoad) {
            html =
                <div className="loading"></div>
        }
        else {
            const slide_settings = {
                arrow: true,
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 2
            };
            html = 
                <Slider {...slide_settings}>
                    {this.state.recommendation.map(product => <ProductCard key={product.businessId} data={product}/>)}
                </Slider>
        }
        return html;
    }


    render() {
        return (
            <div className="ProductRecommendation">
                <div className="ProductRecommendation-row">
                    <div className="ProductRecommendation-ref ">
                        <div className="title">
                            <h2>Você visitou</h2>
                        </div>
                        {this.renderProduct()}
                    </div>
                    <div className="ProductRecommendation-slider">
                        <div className="title">
                            <h2>e talvez se interesse por: </h2>
                        </div>
                        {this.renderSlider()}
                        <Script url="http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X" onCreate={this.handleScriptCreate.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductRecommendation;