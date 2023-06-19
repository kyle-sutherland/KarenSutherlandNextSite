import Header from '@components/header';
import {Content, EndNote} from "@components/content";
import {AdvancedBannerTop} from "@components/advancedBannerTop";
import {Parallax, ParallaxProvider} from "react-scroll-parallax";

export default function Home() {
    return (<>
        <div className='container bg-thistle-blossom border-b border-blue-green rounded-t-lg'>
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
            <div className='container cutout-text'>
                <div className='container mx-auto md:w-1/3'><p className={'text-slate text-4xl p-2'}>A bunch of nice text</p></div>
                <div className='container mx-auto md:w-1/3'><p className={'text-slate text-3xl p-2'}>
                    This is where you could place some nice, welcoming
                    text about Karen Sutherland. Who doesn't want to
                    know about Karen Sutherland?
                </p>
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
