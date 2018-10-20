import React, { Component } from 'react';
import ProductCard from './ProductCard';
import Slider from "react-slick";

class ProductRecommendation extends Component {
    constructor () {
        super();
        this.state = {
            size: 10,
            product: {
                businessId: "1768629",
                name: 'Tablet Smart DL HD7 Kids K71 com 4GB, Wi-Fi, Tela 7", Câmera 2MP, Cabo USB, Suporte à Modem 3G, Slot para Cartão e Android 4.0 – Chumbo',
                imageName: "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6665633",
                detailUrl: "//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-Smart-DL-HD7-Kids-K71-com-4GB-Wi-Fi-Tela-7-Camera-2MP-Cabo-USB-Suporte-a-Modem-3G-Slot-para-Cartao-e-Android-4-0-–-Chumbo-1768629.html",
                price: "R$ 499,00",
                oldPrice: "R$ 599,00",
                productInfo: {
                    paymentConditions: "ou <strong>12X</strong> de <strong> 41.58</strong>"
                }
            },
            recommendation: [
                {
                    businessId: "1768411",
                    name: 'Tablet AOC Breeze MW0711BR com Tela de 7", 8GB, Wi-Fi, Leitor de Cartão, Capa Protetora e Android 4.0',
                    imageName: "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6624363",
                    detailUrl: "//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-AOC-Breeze-MW0711BR-com-Tela-de-7-8GB-Wi-Fi-Leitor-de-Cartao-Capa-Protetora-e-Android-4-0-1768411.html",
                    price: "R$ 499,00",
                    oldPrice: "R$ 599,00",
                    productInfo: {
                        paymentConditions: "ou <strong>12X</strong> de <strong> 41.58</strong>"
                    }
                },
                {
                    businessId: "1768491",
                    name: "Tablet DL Everest EV-T71 PRE com Tela 7”, 4GB, Câmera 2MP, Wi-Fi, Suporte à Modem 3G e Android 4.0",
                    imageName: "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829307",
                    detailUrl: "//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-DL-Everest-EV-T71-PRE-com-Tela-7”-4GB-Camera-2MP-Wi-Fi-Suporte-a-Modem-3G-e-Android-4-0-1768491.html",
                    price: "R$ 499,00",
                    oldPrice: null,
                    productInfo: {
                        paymentConditions: "ou <strong>12X</strong> de <strong> 41.58</strong>"
                    }
                },
                {
                    businessId: "1706504",
                    name: 'Tablet Smart DL HD7 com 4GB, Wi-Fi, Tela 7", Câmera 2MP, Cabo USB, Slot para Cartão e Android 4.0 - Chumbo',
                    imageName: "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6506376",
                    detailUrl: "//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-Smart-DL-HD7-com-4GB-Wi-Fi-Tela-7-Camera-2MP-Cabo-USB-Slot-para-Cartao-e-Android-4-0-Chumbo-1706504.html",
                    price: "R$ 399,00",
                    oldPrice: "R$ 549,00",
                    productInfo: {
                        paymentConditions: "ou <strong>12X</strong> de <strong> 33.25</strong>"
                    }
                },
                {
                    businessId: "1826580",
                    name: "Tablet Phaser Kinno PC709 VE Plus com Tela 7” Multitouch, 4GB, Wi-Fi, Suporte à Modem 3G e Android 2.3",
                    imageName: "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6875461",
                    detailUrl: "//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-Phaser-Kinno-PC709-VE-Plus-com-Tela-7”-Multitouch-4GB-Wi-Fi-Suporte-a-Modem-3G-e-Android-2-3-1826580.html",
                    price: "R$ 379,00",
                    oldPrice: "R$ 499,00",
                    productInfo: {
                        paymentConditions: "ou <strong>12X</strong> de <strong> 31.58</strong>"
                    }
                },
                {
                    businessId: "1765938",
                    name: 'Tablet Multilaser Vibe NB027 com Tela 7" com 8GB, Slot para Cartão, Wi-Fi e Android 4.0 – Rosa',
                    imageName: "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6584703",
                    detailUrl: "//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-Multilaser-Vibe-NB027-com-Tela-7-com-8GB-Slot-para-Cartao-Wi-Fi-e-Android-4-0-–-Rosa-1765938.html",
                    price: "R$ 399,00",
                    oldPrice: "R$ 599,00",
                    productInfo: {
                        paymentConditions: "ou <strong>12X</strong> de <strong> 33.25</strong>"
                    }
                }
            ]
        }
    }

    componentDidMount () {
/*         var header = new Headers({
            'Content-Type': 'text/plain',
            'X-Custom-Header': 'hello world'
        });
        fetch('http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X')
            .then(response => response.json())
            .then(product => {
                console.log('Product', product);
                //this.setState();
            }); */
    }

    render() {
        const slide_settings = {
            arrow: true,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };

        return (
            <div className="ProductRecommendation">
                <div className="ProductRecommendation-row">
                    <div className="ProductRecommendation-ref ">
                        <div className="title">
                            <h2>Você visitou</h2>
                        </div>
                        <ProductCard data={this.state.product}/>
                    </div>
                    <div class="ProductRecommendation-slider">
                        <div className="title">
                            <h2>e talvez se interesse por: </h2>
                        </div>
                        <Slider {...slide_settings}>
                            {this.state.recommendation.map(product => <ProductCard data={product}/>)}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductRecommendation;