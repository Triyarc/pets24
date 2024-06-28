import React, { useState } from "react";
import ImageUploading from "react-images-uploading";

function PetGallery({ images, setImages,setImageItems }) {

  const [imageIdx, setImageIdx] = useState();
  const maxNumber = 4;

  const onChange = async  (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    // let selectedImage = imageList[addUpdateIndex];
    setImageIdx(imageList.length);
    setImages(imageList);
    
    const fileObjects = await Promise.all(
      imageList.map(async (image) => {
        const file = await createFileObject(image.file);
        return file;
      })
    );
    setImageItems(fileObjects);
    console.log(fileObjects,"fileObjects")
  };

  const createFileObject = (fileData) => {
    return new File([fileData], "image.jpg", { type: "image/jpeg" });
  };

  return (
    <div className='container'>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey='data_url'
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <>
            <div className='upload__image-wrapper'>
              <div className='row'>
                {imageList.map((image, index) => (
                  <div
                    key={index}
                    className='image-item col-3  justify-content-center text-center mt-5'
                  >
                    <img
                      src={image["data_url"]}
                      alt=''
                      style={{ width: "200px", maxHeight: "200px" }}
                    />
                    <div className='image-item__btn-wrapper d-flex mt-3'>
                      <button
                        className='btn btn-primary btn_md w-100 me-3'
                        onClick={() => onImageUpdate(index)}
                      >
                        Update
                      </button>
                      <button
                        className='btn btn-danger btn_md w-100'
                        onClick={() => onImageRemove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}{" "}
              </div>
              <div className='justify-content-center d-flex mt-5'>
                {imageIdx === 4 ? (
                  ""
                ) : (
                  <button
                    className='btn btn_theme btn_md '
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click to upload pet images
                  </button>
                )}
                &nbsp;
                {!imageIdx ? (
                  ""
                ) : (
                  <button
                    className='btn btn-outline-dark '
                    onClick={onImageRemoveAll}
                  >
                    Remove all images
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </ImageUploading>
    </div>
  );
}

export default PetGallery;
