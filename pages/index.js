import Head from 'next/head';
import Header from '@components/header';
import {Content, EndNote} from "@components/content";
import {AdvancedBannerTop} from "@components/advancedBannerTop";

export default function Home() {
  return (<>
    {/*<AdvancedBannerTop/>*/}
      <Header title='Karen Sutherland'/>
      <div className='container-fluid bg-light'>
        <Content>
          <p className='lead'>
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
      <div className='cutout container-fluid p-4 bg-transparent text-dark'>
        <div className='container col-8'>
          <div className='container-fluid text-ghostwhite'><h1>A bunch of nice text</h1></div>
          <div className='container-fluid col-xl-6 text-ghostwhite'><h3>
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
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of
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
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of
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
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of
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
