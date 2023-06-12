export default function Loading() {
    return (
        <div className='content'>
            <div className="container-fluid rounded col-lg-10 p-0 align-content-center bg-light">
                <h4 className="placeholder-glow"><span className="placeholder col-7"></span> </h4>
                <div className="container-fluid p-4">
                    <div className="d-flex align-items-center">
                        <strong>Loading...</strong>
                        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
