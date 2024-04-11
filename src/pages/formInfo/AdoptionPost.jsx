import Select from "react-select";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import apiCall from "../../apiCall";
import { local_host } from "../../env";
import { toast } from "react-toastify";
function AdoptionPost() {
  const [cityValue, setCityValue] = useState(false);

  const form = useForm({
    defaultValues: {
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
      pincode: "",
      address_line1: "",
      address_line2: "",
      city: "",
      state: "",
      zipCode: "",
      description: "",
    },
  });

  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    setValue,
    reset,
    getValues,
  } = form;
  const { errors } = formState;

  const watchPets = watch("pets");

  const petOptions = data.map((item) => ({
    value: item.pets,
    label: item.pets,
  }));

  const breedOptions = watchPets
    ? data
        .find((item) => item.pets === watchPets)
        .breeds.map((breed) => ({ value: breed, label: breed }))
    : [];

  const watchPincode = watch("pincode");
  const watchCity = watch("city");
  const watchState = watch("state");
  const watchCertificate = watch("certificate");

  const setCityValueFn = (filedValue) => {
    let pincode = {
      pincode: filedValue,
    };
    if (cityValue === false) {
      apiCall({
        method: "POST",
        apiUrl: `${local_host}/api/v1/get_city_state_from_pincode`,
        payload: pincode,
      }).then((res) => {
        if (res?.parameters == null) {
          toast.error("Invalid Zip-Code");
        } else {
          setValue("city", res?.parameters?.city);
          setValue("state", res?.parameters?.state);
          setCityValue(true);
        }
      });
    }
  };

  const onSubmit = (data) => {
    console.log("form Submitted", data);
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      if (key === "certificateImage" && data[key][0] instanceof File) {
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    });

    // apiCall({
    //   method: "POST",
    //   apiUrl: `${local_host}/api/v1/update_profile`,
    //   payload: formData,
    // })
    //   .then((res) => {
    //     if (res?.success == true) {
    //       toast.success("submitted Successfully");
    //       reset();
    //     } else if (res?.success == false) {
    //       toast.error("Something went wrong");
    //     }
    //   })
    //   .catch(() => {
    //     toast.error("Error submitting form. Please try again later.");
    //   });
  };

  useEffect(() => {
    setValue("breed", "");
  }, [watchPets]);

  useEffect(() => {
    if (watchPincode?.length < 6) {
      setCityValue(false);
    } else if (watchPincode?.length == 6) {
      setCityValueFn(watchPincode);
    }
  }, [watchPincode]);

  return (
    <div className='container pt-md-5'>
      <div className='shipping_addres_area_main'>
        <div className='shipping_addres_main_form_area'>
          <h2>Profile Information</h2>
          <div className='shipping_address_form'>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='pincode' className='p-1'>
                      Pet
                    </label>

                    <Controller
                      name='pets'
                      control={control}
                      render={({ field }) => (
                        <Select
                          options={petOptions}
                          value={petOptions.find(
                            (c) => c.value === field.value
                          )}
                          onChange={(val) => field.onChange(val.value)}
                        />
                      )}
                      rules={{ required: true }}
                    />
                    {errors.pets && <p className='text-danger'>Select Pets</p>}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='profile_image' className='p-1'>
                     Breed
                    </label>
                    <Controller
                      name='breed'
                      control={control}
                      render={({ field }) => (
                        <Select
                          options={breedOptions}
                          value={breedOptions.find(
                            (c) => c.value === field.value
                          )}
                          onChange={(val) => field.onChange(val.value)}
                        />
                      )}
                      rules={{ required: true }}
                    />
                    {errors.breed && (
                      <p className='text-danger'>Select Breed Correctly</p>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='nickname' className='p-1'>
                      Nickname
                    </label>

                    <input
                      type='text'
                      id='nickname'
                      className='form-control'
                      {...register("nickname", {
                        required: {
                          value: true,
                          message: "Nickname required",
                        },
                        pattern: {
                          value: /^[a-zA-Z ]{3,}$/,
                          message: "Only in Alphabetic of 3 letter ",
                        },
                      })}
                    />

                    <p className='text-danger'>{errors.nickname?.message}</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='gender' className='p-1'>
                      Gender*
                    </label>
                    <select
                      as='select' // Updated to use select for dropdown
                      className='form-control'
                      name='gender'
                      {...register("gender", {
                        required: {
                          value: true,
                          message: "Gender required",
                        },
                      })}
                    >
                      <option value=''>Select Gender</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='other'>Other</option>
                    </select>
                    <p className='text-danger '>{errors.gender?.message}</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='dob' className='p-1'>
                      Date Of Birth
                    </label>

                    <input
                      type='date'
                      id='dob'
                      className='form-control'
                      {...register("dob", {
                        required: {
                          value: true,
                          message: "Date Of Birth required",
                        },
                      })}
                    />

                    <p className='text-danger'>{errors.dob?.message}</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='height' className='p-1'>
                      Height
                    </label>
                    <input
                      type='number'
                      id='height'
                      className='form-control'
                      {...register("height", {
                        required: {
                          value: true,
                          message: "Height required",
                        },
                      })}
                    />
                    <p className='text-danger'>{errors.height?.message}</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='weight' className='p-1'>
                      Weight
                    </label>
                    <input
                      type='number'
                      id='weight'
                      className='form-control'
                      {...register("weight", {
                        required: {
                          value: true,
                          message: "Weight required",
                        },
                      })}
                    />
                    <p className='text-danger'>{errors.weight?.message}</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='certificate' className='p-1'>
                      Certificate*
                    </label>
                    <select
                      as='select' // Updated to use select for dropdown
                      className='form-control'
                      name='certificate'
                      {...register("certificate", {
                        required: {
                          value: true,
                          message: "Certificate required",
                        },
                      })}
                    >
                      <option value=''>Select Certificate</option>
                      <option value='yes'>Yes</option>
                      <option value='No'>No</option>
                    </select>
                    <p className='text-danger '>{errors.gender?.message}</p>
                  </div>
                </div>
                {watchCertificate == "yes" && (
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label for='certificateImage' className='p-1'>
                        Certificate Image (optional)
                      </label>

                      <input
                        type='file'
                        id='certificateImage'
                        className='form-control'
                        accept='.jpg, .jpeg, .png'
                        {...register("certificateImage", {
                          required: {
                            value: true,
                            message: "Certificate Image required",
                          },
                        })}
                      />
                      <p className='text-danger'>
                        {errors.certificateImage?.message}
                      </p>
                    </div>
                  </div>
                )}

                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='email_id' className='p-1'>
                      E-mail
                    </label>

                    <input
                      type='text'
                      id='email_id'
                      className='form-control'
                      {...register("email_id", {
                        required: { value: true, message: "E-mail required" },
                        pattern: {
                          value: /^[a-zA-Z]\w*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                          message: "Provid Valid Email",
                        },
                      })}
                    />

                    <p className='text-danger'>{errors.email_id?.message}</p>
                  </div>
                </div>

                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='phone_number' className='p-1'>
                      Phone Number
                    </label>

                    <input
                      type='number'
                      id='phone_number'
                      className='form-control'
                      {...register("phone_number", {
                        required: {
                          value: true,
                          message: "Phone Number required",
                        },
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "Provid Valid Phone Number",
                        },
                      })}
                    />

                    <p className='text-danger'>
                      {errors.phone_number?.message}
                    </p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='pincode' className='p-1'>
                      Fill valid Zip Code
                    </label>

                    <input
                      type='text'
                      id='pincode'
                      className='form-control'
                      {...register("pincode", {
                        pattern: {
                          value: /^[1-9][0-9]{5}$/,
                          message: "valid pincode",
                        },
                        required: { value: true, message: "Zip-Code required" },
                        validate: (filedValue) => {
                          setCityValueFn(filedValue);
                        },
                      })}
                    />
                    <p className='text-danger'>{errors.pincode?.message}</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='address_line1' className='p-1'>
                      Appartment No*
                    </label>

                    <input
                      type='text'
                      id='address_line1'
                      className='form-control'
                      {...register("address_line1", {
                        required: {
                          value: true,
                          message: "Appartment No required",
                        },
                      })}
                    />

                    <p className='text-danger'>
                      {errors.address_line1?.message}
                    </p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='address_line2' className='p-1'>
                      Street*
                    </label>

                    <input
                      type='text'
                      id='address_line2'
                      className='form-control'
                      {...register("address_line2", {
                        required: {
                          value: true,
                          message: "Street required",
                        },
                      })}
                    />

                    <p className='text-danger'>
                      {errors.address_line2?.message}
                    </p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='city' className='p-1'>
                      city
                    </label>

                    <input
                      type='text'
                      id='city'
                      className='form-control'
                      {...register("city", {
                        required: {
                          value: true,
                          message: "City required",
                        },
                      })}
                    />
                    {watchCity ? (
                      ""
                    ) : (
                      <p className='text-danger'>{errors.city?.message}</p>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='state' className='p-1'>
                      State
                    </label>

                    <input
                      type='text'
                      id='state'
                      className='form-control'
                      {...register("state", {
                        required: {
                          value: true,
                          message: "State required",
                        },
                      })}
                    />
                    {watchState ? (
                      ""
                    ) : (
                      <p className='text-danger'>{errors.state?.message}</p>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='country' className='p-1'>
                      Country
                    </label>

                    <input
                      type='text'
                      id='country'
                      className='form-control'
                      value='India'
                      disabled
                    />
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
            <DevTool control={control} />
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
