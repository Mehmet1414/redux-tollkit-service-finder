import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const categoryState = useSelector((state)=> state.CategorySlice)
  return (
    <>
    <footer>
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-6 ">
            <p>
              Copyright © 2036 <a href="#">Cyborg Gaming</a> Company. All rights
              reserved.
              <br />
              Design:
              <a
                href="https://templatemo.com"
                target="_blank"
                title="free CSS templates"
                rel="noreferrer"
              >
                TemplateMo
              </a>{" "}
              Distributed By
              <a href="https://themewagon.com" target="_blank" rel="noreferrer">
                ThemeWagon
              </a>
            </p>
          </div>
          <div className="col-lg-6 m-auto d-flex flex-column ">
            <strong className=" text-light px-3 pt-3">Kategoriler</strong>
            <ListGroup style={{height:"80px"}} >
              <ListGroupItem className=" d-flex flex-column overflow-auto bg-dark">
            {categoryState.categories.map((item, index)=>{
              return(
                <Link to={item.slug} key={item.id}>
                {index +1}-{item.name}
              </Link>
              )
            })}
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};
export default Footer;
