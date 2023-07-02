import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";

export const BlogDetail = () => {
  const api = useApi();
  const [blogDetail, setBlogDetail] = useState(null);
  const params = useParams();

  useEffect(() => {
    (async () => {
      const bolgsDetailRespo = await api.get(
        "public/blogs/getBySlug/" + params.slug
      );

      console.log(">>blogsDetail", bolgsDetailRespo.data.data);
      setBlogDetail(bolgsDetailRespo.data.data);
    })();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <h1 className=" text-center">Blog Detail</h1>

              <div className="main-banner " style={{ minHeight:"100px"}}>
                <h4>
                  <em>{blogDetail?.blog.title}</em>
                </h4>
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
                      {blogDetail?.blogs.map((item) => (
                        <div className="col-lg-12 col-sm-12" key={item.id}>
                          <div className="item">
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>
                          </div>
                        </div>
                      ))}
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
