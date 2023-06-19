import {Content} from "@components/content";

export default function Loading() {
  return (
    <Content>
      <h4 className="placeholder-glow"><span className="placeholder col-7"></span></h4>
      <div className="container-fluid p-4">
        <div className="d-flex align-items-center">
          <strong>Loading...</strong>
          <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
      </div>
    </Content>
  )
}
