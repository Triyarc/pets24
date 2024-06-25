import React, { useEffect, useState } from "react";
import PetDetailsArea from "../components/petDetails/PetDetailsArea";
import SubscribeArea from "../components/common/SubscribeArea";
import { useParams } from "react-router-dom";
import { local_host } from "../env";
import apiCall from "../apiCall";

function PetDetails() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState();
  const [dataReturn, setDataReturn] = useState(false);
  const [relatedData, setRelatedData] = useState([]);

  var pathname = window.location.pathname;
  var parts = pathname.split("/");
  var desiredPart = parts[2];

  useEffect(() => {
    return () => {
      if (desiredPart === "adoption") {
        apiCall({
          method: "POST",
          apiUrl: `${local_host}/api/v1/adoption_detail`,
          payload: { adoption_id: id },
        }).then((res) => {
          setData(res.parameters.data);
          setSelectedImage(res.parameters.data.petPhoto[0]);
          setDataReturn(true);
        });
        apiCall({
          method: "POST",
          apiUrl: `${local_host}/api/v1/related_adoption_list`,
          payload: { adoption_id: id },
        }).then((res) => {
          setRelatedData(res.parameters.data);
        });
      } else if (desiredPart === "mating") {
        apiCall({
          method: "POST",
          apiUrl: `${local_host}/api/v1/mating_detail`,
          payload: { mating_id: id },
        }).then((res) => {
          setData(res.parameters.data);
          setSelectedImage(res.parameters.data.petPhoto[0]);
          setDataReturn(true);
        });
        apiCall({
          method: "POST",
          apiUrl: `${local_host}/api/v1/related_mating_list`,
          payload: { mating_id: id },
        }).then((res) => {
          setRelatedData(res.parameters.data);
        });
      }
    };
  }, [desiredPart, id]);

  return (
    <div>
      {dataReturn ? (
        <PetDetailsArea
          data={data}
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
          id={id}
          desiredPart={desiredPart}
          relatedData={relatedData}
        />
      ) : (
        <h2
          style={{ height: "100vh" }}
          className=' d-flex text-center align-items-center justify-content-center'
        >
          Loading...
        </h2>
      )}

      <SubscribeArea />
    </div>
  );
}

export default PetDetails;
