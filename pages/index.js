import { Content, EndNote } from "@components/content";

export default function Home() {
  return (
    <>
      <div className="container bg-thistle-blossom border-b border-bosporus rounded-t-lg">
        <img
          src="/kslogo-banner-large.svg"
          className="bg-thistle-blossom md:rounded-t-lg"
        />
      </div>
      <div className="container-fluid bg-bleached-silk">
        <Content>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
          </p>
        </Content>
      </div>
      <div className="cutout container-fluid px-4 bg-transparent text-dark">
        <div className="container cutout-text">
          <div className="container mx-auto md:w-1/3">
            <p className={"text-slate text-4xl p-2"}>A bunch of nice text</p>
          </div>
          <div className="container mx-auto md:w-1/3">
            <p className={"text-slate text-3xl p-2"}>
              This is where you could place some nice, welcoming text about
              Karen Sutherland. Who doesn't want to know about Karen Sutherland?
            </p>
          </div>
        </div>
      </div>
      <EndNote>
        <div className="container-fluid col-auto card-row">
          <div className="grid-flow-col-dense grid gap-6">
            <div className="container w-56 mx-auto p-3 border border-gray-400 rounded-md flex">
              <div className="text-slate">
                <img src="..." className="" alt="..." />
                <div className="p-1">
                  <h5 className="p-1">Card title</h5>
                  <p className="p-1 pb-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="#"
                    className="rounded-md bg-bosporus px-3 py-2 text-sm text-bleached-silk shadow-sm hover:bg-bosporus-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-thistle-blossom"
                  >
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </EndNote>
    </>
  );
}
