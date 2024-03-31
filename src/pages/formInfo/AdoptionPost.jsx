import React, { useState } from "react";
import Select from "react-select";
import ImageUploading from "react-images-uploading";
import { useNavigate  } from "react-router-dom";

function AdoptionPost() {
  const [formData, setFormData] = useState({
    pets: null,
    breed: null,
    nickname: "",
    gender: "",
    dob: "",
    height: "",
    weight: "",
    certificate: "",
    certificateImage: null,
    petPhoto: null,
    apartment: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState({
    pets: "",
    breed: "",
    nickname: "",
    dob: "",
    height: "",
    weight: "",
    certificate: "",
    petPhoto: "",
    apartment: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    gender: "",
    description: "",
  });
  const navigate = useNavigate();


  const petOptions = data.map((item) => ({
    value: item.pets,
    label: item.pets,
  }));

  const breedOptions = formData.pets
    ? data
        .find((item) => item.pets === formData.pets.value)
        .breeds.map((breed) => ({ value: breed, label: breed }))
    : [];

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: value
        ? ""
        : `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
        isValid = false;
      } else {
        newErrors[key] = "";
      }
      if (key === "zipCode") {
        const trimmedValue = value.trim();
        if (trimmedValue.length === 0) {
          newErrors.zipCode = "Zipcode is required";
          isValid = false;
        } else if (trimmedValue.length !== 6) {
          newErrors.zipCode = "Zipcode must be exactly 6 characters";
          isValid = false;
        } else {
          newErrors.zipCode = "";
        }
      }
    });

    // Validate thumbnail photo
    if (!formData.petPhoto) {
      newErrors.petPhoto = "Thumbnail photo is required";
      isValid = false;
    } else {
      newErrors.petPhoto = "";
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleCertificateImageChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (file && allowedTypes.includes(file.type)) {
      setFormData({
        ...formData,
        certificateImage: file,
      });
    } else {
      // Reset the certificate image field if an invalid file type is selected
      setFormData({
        ...formData,
        certificateImage: null,
      });
      // Display an error message or take any other appropriate action
      console.error("Please select a valid image file (jpg, jpeg, or png).");
    }
  };

  const handlepetPhotoChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (file && allowedTypes.includes(file.type)) {
      setFormData({
        ...formData,
        petPhoto: file,
      });
    } else {
      // Reset the thumbnail photo field if an invalid file type is selected
      setFormData({
        ...formData,
        petPhoto: null,
      });
      // Display an error message or take any other appropriate action
      console.error(
        "Please select a valid image file (jpg, jpeg, or png) for thumbnail photo."
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Validate thumbnail photo
      if (formData.petPhoto) {
        // Handle submission if thumbnail photo is provided
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          formDataToSend.append(key, value);
        });
        console.log("Form submitted successfully:", formData);
        navigate("/pet-gallery");

        try {
          const response = await fetch("your-api-url", {
            method: "POST",
            body: formDataToSend,
          });
          if (response.ok) {
            console.log("Form submitted successfully:", formData);
            setFormData({
              pets: null,
              breed: null,
              nickname: "",
              gender: "",
              dob: "",
              height: "",
              weight: "",
              certificate: "",
              certificateImage: null,
              petPhoto: null,
              apartment: "",
              streetAddress: "",
              city: "",
              zipCode: "",
              description: "",
            });
          } else {
            console.error("Failed to submit form.");
          }
        } catch (error) {
          console.error("Error occurred while submitting form:", error);
        }
      } else {
        // Display error if thumbnail photo is not provided
        setFormErrors({
          ...formErrors,
          petPhoto: "Thumbnail photo is required",
        });
      }
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  return (
    <div className='container pt-md-5'>
      <div className='shipping_addres_area_main'>
        <div className='shipping_addres_main_form_area'>
          <h2>Adoption Information</h2>
          <div className='shipping_address_form'>
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>Pets*</label>
                    <Select
                      options={petOptions}
                      value={formData.pets}
                      onChange={(selectedOption) =>
                        handleChange("pets", selectedOption)
                      }
                    />
                    {formErrors.pets && (
                      <span style={{ color: "red" }}>{formErrors.pets}</span>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>Breed*</label>
                    <Select
                      options={breedOptions}
                      value={formData.breed}
                      onChange={(selectedOption) =>
                        handleChange("breed", selectedOption)
                      }
                    />
                    {formErrors.breed && (
                      <span style={{ color: "red" }}>{formErrors.breed}</span>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Nickname'
                      name='nickname'
                      value={formData.nickname}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    />
                    {formErrors.nickname && (
                      <span style={{ color: "red" }}>
                        {formErrors.nickname}
                      </span>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <select
                      className='form-select form-control'
                      name='gender'
                      value={formData.gender}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    >
                      <option value='' disabled>
                        Gender
                      </option>
                      <option value='Male'>Male</option>
                      <option value='Female'>Female</option>
                    </select>
                    {formErrors.gender && (
                      <span style={{ color: "red" }}>{formErrors.gender}</span>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <input
                      type='date'
                      className='form-control'
                      placeholder='Date of Birth'
                      name='dob'
                      value={formData.dob}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    />
                    {formErrors.dob && (
                      <span style={{ color: "red" }}>{formErrors.dob}</span>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <input
                      type='Number'
                      className='form-control'
                      placeholder='Height in CM'
                      name='height'
                      value={formData.height}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    />
                    {formErrors.height && (
                      <span style={{ color: "red" }}>{formErrors.height}</span>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <input
                      type='Number'
                      className='form-control'
                      placeholder='Weight in KG'
                      name='weight'
                      value={formData.weight}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    />
                    {formErrors.weight && (
                      <span style={{ color: "red" }}>{formErrors.weight}</span>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <select
                      className='form-select form-control'
                      name='certificate'
                      value={formData.certificate}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    >
                      <option value='' disabled>
                        Certificate
                      </option>
                      <option value='Yes'>Yes</option>
                      <option value='No'>No</option>
                    </select>

                    {formErrors.certificate && (
                      <span style={{ color: "red" }}>
                        {formErrors.certificate}
                      </span>
                    )}
                  </div>
                </div>
                {formData.certificate === "Yes" && (
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label>Certificate Image (optional)</label>
                      <input
                        type='file'
                        className='form-control'
                        accept='.jpg, .jpeg, .png'
                        onChange={handleCertificateImageChange}
                      />
                    </div>
                  </div>
                )}
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>Pet Photo </label>
                    <input
                      type='file'
                      className='form-control'
                      accept='.jpg, .jpeg, .png'
                      onChange={handlepetPhotoChange}
                    />
                    {formErrors.petPhoto && (
                      <span style={{ color: "red" }}>
                        {formErrors.petPhoto}
                      </span>
                    )}
                  </div>
                </div>

                <div className='col-lg-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Apartment No'
                      name='apartment'
                      value={formData.apartment}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    />
                    {formErrors.apartment && (
                      <span style={{ color: "red" }}>
                        {formErrors.apartment}
                      </span>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Street Address'
                      name='streetAddress'
                      value={formData.streetAddress}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    />
                    {formErrors.streetAddress && (
                      <span style={{ color: "red" }}>
                        {formErrors.streetAddress}
                      </span>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='City'
                      name='city'
                      value={formData.city}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    />
                    {formErrors.city && (
                      <span style={{ color: "red" }}>{formErrors.city}</span>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <input
                      type='number  '
                      className='form-control'
                      placeholder='Zip Code'
                      name='zipCode'
                      value={formData.zipCode}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    />
                    {formErrors.zipCode && (
                      <span style={{ color: "red" }}>{formErrors.zipCode}</span>
                    )}
                  </div>
                </div>

                <div className='col-lg-12'>
                  <div className='form-group'>
                    <textarea
                      className='form-control'
                      placeholder='Description'
                      name='description'
                      value={formData.description}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    ></textarea>
                    {formErrors.description && (
                      <span style={{ color: "red" }}>
                        {formErrors.description}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className='modal-footer'>
                <div className='my_acount_submit'>
                  <button type='submit' className='btn btn_theme btn_md w-100'>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdoptionPost;

const data = [
  {
    pets: "Dogs",
    breeds: [
      "Labrador Retriever",
      "German Shepherd",
      "Golden Retriever",
      "Bulldog",
      "Poodle",
      "Boxer",
      "Siberian Husky",
      "Dachshund",
      "Rottweiler",
      "Great Dane",
      "Shih Tzu",
      "Doberman Pinscher",
      "Australian Shepherd",
      "Cavalier King Charles Spaniel",
      "Border Collie",
      "Yorkshire Terrier",
      "Pomeranian",
      "Bernese Mountain Dog",
      "Shetland Sheepdog",
      "Boston Terrier",
      "Pug",
      "French Bulldog",
      "Collie",
      "Weimaraner",
      "Chihuahua",
      "English Springer Spaniel",
      "Basset Hound",
      "Bloodhound",
      "Maltese",
      "West Highland White Terrier",
      "Papillon",
      "Vizsla",
      "Miniature Schnauzer",
      "Staffordshire Bull Terrier",
      "Greyhound",
      "Cocker Spaniel",
      "Shiba Inu",
      "Bichon Frise",
      "Lhasa Apso",
      "English Mastiff",
      "Havanese",
      "Cane Corso",
      "Newfoundland",
      "Bull Terrier",
      "Saint Bernard",
      "Chinese Shar-Pei",
      "Alaskan Malamute",
      "Basenji",
      "Whippet",
      "Irish Setter",
      "Bullmastiff",
      "Chinese Crested",
      "Rhodesian Ridgeback",
      "Akita",
      "Portuguese Water Dog",
      "Irish Wolfhound",
      "Old English Sheepdog",
      "Airedale Terrier",
      "Brussels Griffon",
      "Border Terrier",
      "Irish Terrier",
      "Scottish Terrier",
      "Miniature Pinscher",
      "Dalmatian",
      "Norwich Terrier",
      "Norfolk Terrier",
      "Italian Greyhound",
      "Belgian Malinois",
      "Keeshond",
      "American Eskimo Dog",
      "Japanese Chin",
      "Samoyed",
      "Great Pyrenees",
      "Australian Terrier",
      "Bergamasco",
      "Coton de Tulear",
      "English Toy Spaniel",
      "Manchester Terrier",
      "Xoloitzcuintli",
      "Silky Terrier",
      "Toy Fox Terrier",
      "American Hairless Terrier",
      "Skye Terrier",
      "Tibetan Terrier",
      "Toy Manchester Terrier",
      "Swedish Vallhund",
      "Pekingese",
      "Otterhound",
      "Spinone Italiano",
      "Sealyham Terrier",
      "Bedlington Terrier",
      "Pharaoh Hound",
      "Glen of Imaal Terrier",
      "Polish Lowland Sheepdog",
      "Lowchen",
      "Sloughi",
      "Manchester Terrier",
      "Petit Basset Griffon Vendeen",
      "Norwegian Buhund",
      "Pyrenean Shepherd",
      "Cirneco dell'Etna",
      "English Foxhound",
      "Grand Basset Griffon Vendeen",
      "Harrier",
      "Ibizan Hound",
      "Kooikerhondje",
      "Lagotto Romagnolo",
      "Peruvian Inca Orchid",
      "Plott",
      "Portuguese Podengo",
      "Pyrenean Mastiff",
      "Rat Terrier",
      "Redbone Coonhound",
      "Russell Terrier",
      "Schapendoes",
      "Schipperke",
      "Scottish Deerhound",
      "Sloughi",
      "Stabyhoun",
      "Sussex Spaniel",
      "Treeing Walker Coonhound",
      "Welsh Terrier",
      "Wire Fox Terrier",
      "Wirehaired Pointing Griffon",
      "American Staffordshire Terrier",
      "Anatolian Shepherd Dog",
      "Black Russian Terrier",
      "Boerboel",
      "Catahoula Leopard Dog",
      "Chinese Crested",
      "Cirneco dell'Etna",
      "Coton de Tulear",
      "Dogo Argentino",
      "Dutch Shepherd",
      "Entlebucher Mountain Dog",
      "Fila Brasileiro",
      "German Pinscher",
      "Giant Schnauzer",
      "Irish Red and White Setter",
      "Japanese Chin",
      "Leonberger",
      "Mudi",
      "Neapolitan Mastiff",
      "Nederlandse Kooikerhondje",
      "Portuguese Podengo",
      "Pumi",
      "Rat Terrier",
      "Redbone Coonhound",
      "Russian Toy",
      "Russian Tsvetnaya Bolonka",
      "Samoyed",
      "Schipperke",
      "Shikoku",
      "Sloughi",
      "Smooth Fox Terrier",
      "Spanish Mastiff",
      "Stabyhoun",
      "Swedish Lapphund",
      "Thai Ridgeback",
      "Tibetan Mastiff",
      "Toy Fox Terrier",
      "Toy Manchester Terrier",
      "Transylvanian Hound",
      "Welsh Terrier",
      "West Highland White Terrier",
      "Xoloitzcuintli",
      "Yorkshire Terrier",
    ],
  },
  {
    pets: "Cats",
    breeds: [
      "Siamese",
      "Persian",
      "Maine Coon",
      "Ragdoll",
      "Bengal",
      "Sphynx",
      "Burmese",
      "Abyssinian",
      "American Shorthair",
      "Scottish Fold",
      "Russian Blue",
      "British Shorthair",
      "Cornish Rex",
      "Devon Rex",
      "Himalayan",
      "Tonkinese",
      "Oriental",
      "Norwegian Forest Cat",
      "Turkish Angora",
      "Turkish Van",
      "Manx",
      "Japanese Bobtail",
      "Chartreux",
      "Siberian",
      "Somali",
      "Birman",
      "American Bobtail",
      "Balinese",
      "Bombay",
      "Cymric",
      "Egyptian Mau",
      "European Burmese",
      "Exotic Shorthair",
      "Havana Brown",
      "LaPerm",
      "Nebelung",
      "Pixiebob",
      "Singapura",
      "Snowshoe",
      "Sokoke",
      "Toyger",
    ],
  },
  {
    pets: "Rabbit",
    breeds: [
      "Holland Lop",
      "Netherland Dwarf",
      "Mini Rex",
      "Lionhead",
      "Flemish Giant",
      "English Angora",
      "Dutch Rabbit",
      "Mini Lop",
      "Mini Satin",
      "Jersey Wooly",
      "American Fuzzy Lop",
      "Polish Rabbit",
      "Silver Marten",
      "Rex Rabbit",
      "Himalayan Rabbit",
      "French Lop",
      "Hotot Rabbit",
      "Belgian Hare",
      "American Sable",
      "Harlequin Rabbit",
      "English Spot",
    ],
  },
  {
    pets: "Hamster",
    breeds: [
      "Syrian Hamster",
      "Dwarf Hamster",
      "Roborovski Hamster",
      "Chinese Hamster",
      "Campbell's Dwarf Hamster",
    ],
  },
  {
    pets: "Lizards",
    breeds: [
      "Leopard Gecko",
      "Bearded Dragon",
      "Crested Gecko",
      "Blue Tongue Skink",
      "Ball Python",
      "Corn Snake",
      "Veiled Chameleon",
      "Green Anole",
      "Uromastyx",
      "Tokay Gecko",
      "Red-Eared Slider",
      "Russian Tortoise",
      "Panther Chameleon",
      "Gargoyle Gecko",
      "Frilled Dragon",
      "Red-Footed Tortoise",
      "King Snake",
      "Milk Snake",
      "Garter Snake",
      "Boa Constrictor",
      "Iguana",
    ],
  },
  {
    pets: "Birds",
    breeds: [
      "Budgerigar",
      "Cockatiel",
      "Lovebird",
      "African Grey Parrot",
      "Canary",
      "Finch",
      "Cockatoo",
      "Macaw",
      "Conure",
      "Parakeet",
      "Amazon Parrot",
      "Poicephalus Parrot",
      "Quaker Parrot",
      "Eclectus Parrot",
      "Senegal Parrot",
      "Pionus Parrot",
      "Lorikeet",
      "Caique",
      "Ringneck Parrot",
      "Cockatiel",
      "Budgerigar",
    ],
  },
  {
    pets: "Guinea Pigs",
    breeds: [
      "American",
      "Abyssinian",
      "Peruvian",
      "Silkie",
      "Texel",
      "Coronet",
      "Teddy",
      "Rex",
      "Skinny Pig",
      "Hairless Guinea Pig",
      "Sheltie",
      "White Crested",
      "Himalayan",
      "Merino",
      "Sheba Mini Yak",
      "Alpaca",
      "Balinese",
      "Dutch",
    ],
  },
  {
    pets: "Ferret",
    breeds: [
      "Sable",
      "Albino",
      "Silver Mitt",
      "Dark-Eyed White",
      "Cinnamon",
      "Champagne",
      "Black Sable",
      "Siamese",
      "Panda",
      "Blaze",
      "Roan",
      "Angora",
    ],
  },
  {
    pets: "Turtles",
    breeds: [
      "Red-Eared Slider",
      "Russian Tortoise",
      "Painted Turtle",
      "Box Turtle",
      "Map Turtle",
      "Musk Turtle",
      "Softshell Turtle",
      "Snapping Turtle",
      "Diamondback Terrapin",
      "Spotted Turtle",
      "Slider Turtle",
      "Eastern Box Turtle",
      "Western Painted Turtle",
      "Yellow-Bellied Slider",
    ],
  },
  {
    pets: "Fish",
    breeds: [
      "Goldfish",
      "Betta",
      "Guppy",
      "Tetra",
      "Angelfish",
      "Molly",
      "Platy",
      "Swordtail",
      "Cichlid",
      "Barb",
      "Danio",
      "Catfish",
      "Plecostomus",
      "Koi",
      "Discus",
      "Rainbowfish",
      "Piranha",
      "Tiger Barb",
      "Koi",
      "Rasbora",
      "Loach",
      "Pufferfish",
      "Archerfish",
      "Corydoras",
      "Killifish",
      "Arowana",
      "Electric Blue Ram",
      "Axolotl",
      "Oscar",
      "Gourami",
      "Paradise Fish",
    ],
  },
  {
    pets: "Hedgehogs",
    breeds: ["African Pygmy Hedgehog", "European Hedgehog"],
  },
  {
    pets: "Sugar Glider",
    breeds: [
      "Standard Grey",
      "White Face Blonde",
      "White Face Blonde Platinum",
      "Leucistic",
      "Black Beauty",
      "Black Face Black Beauty",
      "Black Face Black Beauty Leucistic",
      "Cremeino",
      "Platinum",
      "White Tip",
      "Mosaic",
    ],
  },
  {
    pets: "Snakes",
    breeds: [
      "Ball Python",
      "Corn Snake",
      "King Snake",
      "Milk Snake",
      "Boa Constrictor",
      "Garter Snake",
      "Rosy Boa",
      "Hognose Snake",
      "Green Tree Python",
      "Reticulated Python",
      "California Kingsnake",
      "Black Rat Snake",
      "Burmese Python",
      "Red-Tailed Boa",
      "Rosy Boa",
      "Gopher Snake",
    ],
  },
  {
    pets: "Chinchilla",
    breeds: [
      "Standard",
      "Mosaic",
      "Ebony",
      "Beige",
      "Wilson White",
      "Black Velvet",
      "Brown Velvet",
      "TOV Ebony",
      "Sapphire",
      "Violet",
      "Charcoal",
      "Blue Diamond",
      "Pink White",
      "Hetero Beige",
      "Homo Beige",
      "Pastel",
    ],
  },
  {
    pets: "Mouse",
    breeds: [
      "Fancy Mouse",
      "Hairless Mouse",
      "Black Mouse",
      "Brown Mouse",
      "White Mouse",
      "Long-Haired Mouse",
      "Spotted Mouse",
      "Striped Mouse",
      "Satin Mouse",
      "Dumbo Mouse",
      "Rex Mouse",
      "Texel Mouse",
    ],
  },
  {
    pets: "Hermit Crabs",
    breeds: [
      "Caribbean Hermit Crab",
      "Ecuadorian Hermit Crab",
      "Purple Pincher Hermit Crab",
      "Strawberry Hermit Crab",
      "Coenobita brevimanus",
    ],
  },
  {
    pets: "Horses",
    breeds: [
      "Arabian",
      "Thoroughbred",
      "Quarter Horse",
      "Paint Horse",
      "Appaloosa",
      "Friesian",
      "Morgan",
      "Tennessee Walking Horse",
      "American Quarter Horse",
      "Miniature Horse",
      "Shetland Pony",
      "Welsh Pony",
      "Andalusian",
      "Hanoverian",
      "Pony of the Americas",
      "Standardbred",
      "Gypsy Horse",
      "Percheron",
      "Clydesdale",
      "Palomino",
      "Akhal-Teke",
      "Mustang",
      "Irish Draught",
      "Paso Fino",
      "Pony of the Americas",
      "Rocky Mountain Horse",
      "American Paint Horse",
      "Saddlebred",
      "Lusitano",
      "Belgian Draft",
      "Warmblood",
      "Miniature Donkey",
      "Spanish Mustang",
      "Welsh Cob",
      "Connemara Pony",
      "Morab",
      "American Saddlebred",
      "Tennessee Walking Horse",
      "Welara Pony",
      "Icelandic Horse",
      "Norwegian Fjord",
      "Dutch Warmblood",
      "Trakehner",
      "American Cream Draft",
      "Suffolk Punch",
      "Fell Pony",
      "American Bashkir Curly",
      "Australian Stock Horse",
      "Bashkir Curly",
      "Criollo",
      "Cleveland Bay",
      "Brabant",
      "Missouri Fox Trotter",
      "Canadian Horse",
      "National Show Horse",
      "Oldenburg",
      "Shire",
      "Welsh Pony of Cob Type",
      "Dartmoor Pony",
      "Hackney Horse",
      "Lipizzan",
      "Mangalarga Marchador",
      "Miniature Mule",
      "Welsh Pony Section A",
      "Gotland Pony",
      "Nokota",
      "Sorraia",
      "Welsh Pony Section B",
      "Welsh Pony Section C",
      "Welsh Pony Section D",
    ],
  },
  {
    pets: "Goats",
    breeds: [
      "Nubian",
      "Boer",
      "Pygmy",
      "LaMancha",
      "Saanen",
      "Alpine",
      "Toggenburg",
      "Angora",
      "Cashmere",
      "Kiko",
      "Kinder",
      "Nigerian Dwarf",
      "Spanish",
      "Oberhasli",
      "Sable",
      "Golden Guernsey",
      "Fainting",
      "Valais Blackneck",
      "Anglo-Nubian",
    ],
  },
  {
    pets: "Bearded Dragon",
    breeds: [
      "Inland Bearded Dragon",
      "Rankin's Dragon",
      "Central Bearded Dragon",
      "Eastern Bearded Dragon",
      "Western Bearded Dragon",
      "Pogona minor",
      "Pogona nullarbor",
      "Pogona vitticeps",
      "Pogona barbata",
      "Pogona henrylawsoni",
      "Pogona mitchelli",
      "Pogona microlepidota",
    ],
  },
  {
    pets: "Butterfly",
    breeds: [
      "Monarch Butterfly",
      "Painted Lady Butterfly",
      "Swallowtail Butterfly",
      "Morpho Butterfly",
      "Cabbage White Butterfly",
      "Adonis Blue Butterfly",
      "Peacock Butterfly",
      "Red Admiral Butterfly",
      "Common Blue Butterfly",
      "Tiger Swallowtail Butterfly",
      "Clouded Yellow Butterfly",
      "Purple Emperor Butterfly",
      "White Admiral Butterfly",
      "Speckled Wood Butterfly",
      "Orange Tip Butterfly",
      "Gatekeeper Butterfly",
      "Comma Butterfly",
      "Small Tortoiseshell Butterfly",
      "Large White Butterfly",
      "Green-Veined White Butterfly",
      "Brimstone Butterfly",
      "Holly Blue Butterfly",
      "Silver-Washed Fritillary Butterfly",
      "Small Copper Butterfly",
      "Brown Argus Butterfly",
      "Chalk Hill Blue Butterfly",
      "Dingy Skipper Butterfly",
      "Dark Green Fritillary Butterfly",
      "Duke of Burgundy Butterfly",
      "Essex Skipper Butterfly",
      "Grizzled Skipper Butterfly",
      "Green Hairstreak Butterfly",
      "High Brown Fritillary Butterfly",
      "Large Blue Butterfly",
      "Large Heath Butterfly",
      "Marsh Fritillary Butterfly",
      "Northern Brown Argus Butterfly",
      "Pearl-Bordered Fritillary Butterfly",
      "Purple Hairstreak Butterfly",
      "Small Blue Butterfly",
      "Small Heath Butterfly",
      "Small Pearl-Bordered Fritillary Butterfly",
      "Small Skipper Butterfly",
      "Silver-Studded Blue Butterfly",
      "Wall Butterfly",
      "Wood White Butterfly",
    ],
  },
  { pets: "Arctic Fox", breeds: ["Arctic Fox"] },
  {
    pets: "Teacup Pig",
    breeds: [
      "Teacup Pig",
      "Miniature Pig",
      "Micro Pig",
      "Juliana Pig",
      "Potbellied Pig",
    ],
  },
  { pets: "Fennec Fox", breeds: ["Fennec Fox"] },
  {
    pets: "Tortoise",
    breeds: [
      "Russian Tortoise",
      "Greek Tortoise",
      "Hermann's Tortoise",
      "Marginated Tortoise",
      "Leopard Tortoise",
      "Sulcata Tortoise",
      "African Spurred Tortoise",
      "Red-Footed Tortoise",
      "Yellow-Footed Tortoise",
      "Indian Star Tortoise",
      "Galapagos Tortoise",
      "Aldabra Tortoise",
      "Burmese Star Tortoise",
      "Radiated Tortoise",
      "Elongated Tortoise",
      "Angonoka Tortoise",
    ],
  },
  {
    pets: "Gerbils",
    breeds: [
      "Mongolian Gerbil",
      "Fat-tailed Gerbil",
      "Shaw's Jird",
      "Indian Gerbil",
    ],
  },
  {
    pets: "Chicken",
    breeds: [
      "Ameraucana",
      "Rhode Island Red",
      "Leghorn",
      "Wyandotte",
      "Plymouth Rock",
      "Orpington",
      "Silkie",
      "Easter Egger",
      "Sussex",
      "Polish",
      "Brahma",
      "Cochin",
      "Ancona",
      "Andalusian",
      "Australorp",
      "Faverolles",
      "Hamburg",
      "Houdan",
      "Jersey Giant",
      "Marans",
      "Minorca",
      "Phoenix",
      "Sebright",
      "Sultans",
    ],
  },
  { pets: "Chimpanzee", breeds: ["Chimpanzee"] },
  {
    pets: "Pigs",
    breeds: [
      "American Yorkshire",
      "Berkshire",
      "Chester White",
      "Duroc",
      "Hampshire",
      "Landrace",
      "Large Black",
      "Large White",
      "Oxford Sandy and Black",
      "Poland China",
      "Spotted",
    ],
  },
  {
    pets: "Monkeys",
    breeds: [
      "Capuchin Monkey",
      "Marmoset",
      "Squirrel Monkey",
      "Tamarin",
      "Spider Monkey",
      "Gibbon",
      "Chimpanzee",
      "Baboon",
      "Vervet Monkey",
      "Colobus Monkey",
      "Howler Monkey",
    ],
  },
  { pets: "Capybara", breeds: ["Capybara"] },
  {
    pets: "Snails",
    breeds: [
      "Giant African Land Snail",
      "Garden Snail",
      "Apple Snail",
      "Ramshorn Snail",
      "Nerite Snail",
      "Mystery Snail",
      "Japanese Trapdoor Snail",
      "Pond Snail",
    ],
  },
  { pets: "Degu", breeds: ["Common Degu"] },
  {
    pets: "Bee",
    breeds: [
      "Honey Bee",
      "Bumblebee",
      "Carpenter Bee",
      "Mason Bee",
      "Leafcutter Bee",
      "Sweat Bee",
      "Mining Bee",
      "Longhorn Bee",
      "Alkali Bee",
      "Blueberry Bee",
      "Osmia Bee",
    ],
  },
  { pets: "Starfish", breeds: ["Starfish"] },
  {
    pets: "Scorpions",
    breeds: [
      "Emperor Scorpion",
      "Asian Forest Scorpion",
      "Giant Desert Hairy Scorpion",
      "Arizona Bark Scorpion",
      "Heterometrus",
      "Fat-Tailed Scorpion",
      "Deathstalker Scorpion",
      "Pandinus imperator",
      "Androctonus australis",
      "Centruroides sculpturatus",
      "Pandinus dictator",
      "Hadogenes troglodytes",
    ],
  },
  {
    pets: "Turkey",
    breeds: [
      "Broad Breasted White",
      "Bronze",
      "Narragansett",
      "Royal Palm",
      "White Holland",
    ],
  },
  {
    pets: "Gecko",
    breeds: [
      "Leopard Gecko",
      "Crested Gecko",
      "Tokay Gecko",
      "African Fat-Tailed Gecko",
      "Day Gecko",
      "Gargoyle Gecko",
      "House Gecko",
      "Madagascar Giant Day Gecko",
      "Panther Gecko",
      "Pictus Gecko",
      "Mourning Gecko",
      "Satanic Leaf-Tailed Gecko",
    ],
  },
  { pets: "Red Fox", breeds: ["Red Fox"] },
  {
    pets: "Frogs",
    breeds: [
      "American Bullfrog",
      "Green Tree Frog",
      "African Clawed Frog",
      "Red-Eyed Tree Frog",
      "Poison Dart Frog",
      "Budgett's Frog",
      "Pac-Man Frog",
      "White's Tree Frog",
      "Fire-Bellied Toad",
      "Cuban Tree Frog",
      "Gray Tree Frog",
      "Amazon Milk Frog",
      "Pickerel Frog",
      "Wood Frog",
      "Leopard Frog",
    ],
  },
  { pets: "Budgie", breeds: ["Budgerigar"] },
  {
    pets: "Prairie Dog",
    breeds: [
      "Black-Tailed Prairie Dog",
      "White-Tailed Prairie Dog",
      "Mexican Prairie Dog",
      "Utah Prairie Dog",
    ],
  },
  { pets: "Serval", breeds: ["Serval"] },
  {
    pets: "Ducks",
    breeds: [
      "Pekin Duck",
      "Mallard Duck",
      "Muscovy Duck",
      "Rouen Duck",
      "Indian Runner Duck",
      "Khaki Campbell Duck",
      "Crested Duck",
      "Cayuga Duck",
      "Swedish Duck",
      "Campbell Duck",
      "Call Duck",
      "Saxony Duck",
      "Appleyard Duck",
      "Welsh Harlequin Duck",
      "Aylesbury Duck",
      "Silver Appleyard Duck",
    ],
  },
  {
    pets: "Squirrel",
    breeds: [
      "Gray Squirrel",
      "Red Squirrel",
      "Fox Squirrel",
      "Flying Squirrel",
    ],
  },
  {
    pets: "Shrimp",
    breeds: [
      "Cherry Shrimp",
      "Amano Shrimp",
      "Ghost Shrimp",
      "Crystal Red Shrimp",
      "Crystal Black Shrimp",
      "Bee Shrimp",
      "Tiger Shrimp",
      "Blue Tiger Shrimp",
      "Red Tiger Shrimp",
      "Yellow Shrimp",
      "Snowball Shrimp",
      "Bamboo Shrimp",
      "Vampire Shrimp",
      "Fan Shrimp",
      "Sulawesi Shrimp",
      "Assassin Snail",
    ],
  },
];
