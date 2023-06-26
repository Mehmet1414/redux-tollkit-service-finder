import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";

export const ServisDetail = () => {
  const api = useApi();
  const params = useParams();
  const [serviceDetail, setServiceDetail] = useState(null);

  useEffect(() => {
    (async () => {
      const serviceDetailRespo = await api.get(
        "public/services/getBySlug/" + params.slug
      );

      console.log(">> servise detail", serviceDetailRespo.data.data);
      setServiceDetail(serviceDetailRespo.data.data);
    })();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
                <h5>Service Detail</h5>
              <div className="main-banner">
                <h4>
                  <em>{serviceDetail?.service.name}</em>
                </h4>
                <p>{serviceDetail?.service.description}</p>
                <div className="main-banner">
                  <img
                    src={`https://picsum.photos/seed/picsum/400/200`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
