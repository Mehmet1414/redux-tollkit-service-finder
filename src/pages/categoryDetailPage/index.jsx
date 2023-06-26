import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";

export const CategoryDetail = () => {
  const api = useApi();

  const params = useParams();
  const [categoryDetail, setCategoryDetail] = useState(null);

  useEffect(() => {
    (async () => {
      const categoryDetailRespos = await api.get(
        "public/categories/getBySlug/" + params.slug
      );

      console.log(">> kaategory Detaay", categoryDetailRespos.data.data);

      setCategoryDetail(categoryDetailRespos.data.data);
    })();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <div className="main-banner">
              <h4>
              <em>{categoryDetail?.category.name}</em>
              </h4>
              <p>{categoryDetail?.category.description}</p>
                <img
                  src={`https://picsum.photos/seed/picsum/400/200`}
                  alt=""
                />
              </div>
              <div className="most-popular">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="heading-section">
                      <h4>
                        <em>Services</em>
                      </h4>
                    </div>
                    <div className="row">
                      {categoryDetail?.services.map((item) => {
                        return (
                          <div className="col-lg-3 col-sm-6" key={item.id}>
                            <div className="item">
                              <Link to={"/service/" + item.slug}>
                                <img
                                  src={item.image}
                                  onError={(target) => {
                                    target.currentTarget.src = `https://picsum.photos/${item.id}`;
                                  }}
                                  alt=""
                                />
                                <h4>{item.name}</h4>
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="most-popular">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="heading-section">
                      <h4>
                        <em>Blogs</em>
                      </h4>
                    </div>
                    <div className="row">
                      {categoryDetail?.blogs.map((item, index) => {
                        return (
                          <div className="col-lg-3 col-sm-6" key={item.id}>
                            <div className="item">
                              <Link to={"/blog/" + item.slug}>
                                <img
                                  src={item.image}
                                  onError={(target) => {
                                    target.currentTarget.src = `https://picsum.photos/20${index}`;
                                  }}
                                  alt=""
                                />
                                <h4>{item.title}</h4>
                                <p>{item.updated_at}</p>
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
