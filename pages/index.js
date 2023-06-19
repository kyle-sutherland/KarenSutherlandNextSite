import Header from '@components/header';
import {Content, EndNote} from "@components/content";
import {AdvancedBannerTop} from "@components/advancedBannerTop";
import {Parallax, ParallaxProvider} from "react-scroll-parallax";

export default function Home() {
    return (<>
        <div className='container bg-thistle-blossom rounded-t-lg'>
            <img src='/kslogo-banner-large.svg' className='bg-thistle-blossom rounded-t-lg'/>
        </div>
                <div className='container-fluid bg-bleached-silk'>
                    <Content>
                        <p className='text-lg'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                            ab illo inventore veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                        </p>
                    </Content>
                </div>
        <div className='cutout container-fluid px-4 bg-transparent text-dark'>
            <div className='container cutout-text col-8'>
                <div className='container-fluid'><h1>A bunch of nice text</h1></div>
                <div className='container-fluid col-xl-6'><h3>
                    This is where you could place some nice, welcoming
                    text about Karen Sutherland. Who doesn't want to
                    know about Karen Sutherland?
                </h3>
                </div>
            </div>
        </div>
        <EndNote>
            <div className='container-fluid col-auto card-row'>
                <div className='row'>
                    <div className='container-fluid col-auto p-3'>
                        <div className="card text-slate">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of
                                    the card's content.</p>
                                <a href="#" className="btn btn-primary text-dark">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid col-auto p-3'>
                        <div className="card text-slate">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of
                                    the card's content.</p>
                                <a href="#" className="btn btn-primary text-dark">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid col-auto p-3'>
                        <div className="card text-slate">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of
                                    the card's content.</p>
                                <a href="#" className="btn btn-primary text-dark">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </EndNote>
    </>);
}
