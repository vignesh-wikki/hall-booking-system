import { useReducer } from "react";
import axios from "axios";
import { Fragment } from "react";
import { Checkbox } from "@material-tailwind/react";

const initialState = {
  FirstName: "",
  LastName: "",
  password: "",
  hall: "",
  college: "",
  phoneNumber: "",
  hallType: "",
  numberOfMembers: "",
  audioSystem: "",
  gender: "",
  date: "",
  FromTime: "",
  ToTime: "",
  GuestName: "",
  GuestType: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FirstName":
      return {
        ...state,
        FirstName: action.value,
      };
    case "LastName":
      return {
        ...state,
        LastName: action.value,
      };
    case "password":
      return {
        ...state,
        password: action.value,
      };
    case "hall":
      return {
        ...state,
        hall: action.value,
      };
    case "college":
      return {
        ...state,
        college: action.value,
      };
    case "phoneNumber":
      return {
        ...state,
        phoneNumber: action.value,
      };
    case "hallType":
      return {
        ...state,
        hallType: action.value,
      };
    case "numberOfMembers":
      return {
        ...state,
        numberOfMembers: action.value,
      };
    case "audioSystem":
      return {
        ...state,
        audioSystem: action.value,
      };
    case "gender":
      return {
        ...state,
        gender: action.value,
      };
    case "FromTime":
      return {
        ...state,
        FromTime: action.value,
      };
    case "ToTime":
      return {
        ...state,
        ToTime: action.value,
      };
    case "GuestName":
      return {
        ...state,
        GuestName: action.value,
      };
    case "GuestType":
      return {
        ...state,
        GuestType: action.value,
      };
    case "date":
      return {
        ...state,
        date: action.value,
      };
  }
};
export default function BookForm() {
  const [states, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = {
      FirstName: states.FirstName,
      LastName: states.LastName,
      password: states.password,
      hall: states.hall,
      college: states.college,
      phoneNumber: states.phoneNumber,
      hallType: states.hallType,
      numberOfMembers: states.numberOfMembers,
      audioSystem: states.audioSystem,
      gender: states.gender,
      date: states.date,
      FromTime: states.FromTime,
      ToTime: states.ToTime,
      GuestName: states.GuestName,
      GuestType: states.GuestType,
    };

    const res = await axios
      .post("https://hall-booking-system.onrender.com/booking", userDetails, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //const [firstName, setFirstName] = useState('') // useState to store First Name
  //const [lastName, setLastName] = useState('') // useState to store Last Name
  //const [password, setPassword] = useState('')
  //const [hall, setHall] = useState('') // useState to store Age
  //const [college, setCollege] = useState('') // useState to store Email address of the user
  //const [phone,setPhone] = useState('')

  return (
    <div>
      <form
        action="/booking"
        onSubmit={handleSubmit}
        method="POST"
        className="w-full max-w-lg"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              onChange={(e) =>
                dispatch({
                  type: "FirstName",
                  value: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Doe"
              onChange={(e) =>
                dispatch({
                  type: "LastName",
                  value: e.target.value,
                })
              }
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
              onChange={(e) =>
                dispatch({
                  type: "password",
                  value: e.target.value,
                })
              }
              required
            />
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Hall
            </label>
            <div className="relative">
              <select
                onChange={(e) =>
                  dispatch({
                    type: "hall",
                    value: e.target.value,
                  })
                }
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="Vishwaraya Hall">Vishwaraya hall</option>
                <option value="Seminar hall 0">Seminar hall 0</option>
                <option value="Seminar hall 1">Seminar hall 1</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              College
            </label>
            <div className="relative">
              <select
                onChange={(e) =>
                  dispatch({
                    type: "college",
                    value: e.target.value,
                  })
                }
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option value="KSRCT">KSRCT</option>
                <option value="KSRCE">KSRCE</option>
                <option value="KSRIE">KSRIE</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Phone number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="90210*****"
              onChange={(e) =>
                dispatch({
                  type: "phoneNumber",
                  value: e.target.value,
                })
              }
            />
          </div>

          <div className="w-full mt-4 md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Hall type
            </label>

            <Fragment>
              <Checkbox
                id="ripple-on"
                label="AC"
                value="AC"
                ripple={true}
                onChange={(e) =>
                  dispatch({
                    type: "hallType",
                    value: e.target.value,
                  })
                }
              />
              <Checkbox
                id="ripple-off"
                value="Non-AC"
                label="Non-AC"
                ripple={false}
                onChange={(e) =>
                  dispatch({
                    type: "hallType",
                    value: e.target.value,
                  })
                }
              />
            </Fragment>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block mt-2 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Number of members
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="number"
                  placeholder="1 - 200"
                  onChange={(e) =>
                    dispatch({
                      type: "numberOfMembers",
                      value: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block mt-2 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Audio System
                </label>

                <div className="flex justify-start ">
                  <input
                    className="ms-2"
                    type="radio"
                    value="Modern system"
                    onChange={(e) =>
                      dispatch({
                        type: "audioSystem",
                        value: e.target.value,
                      })
                    }
                    name="audio"
                  />
                  <label className=" text-gray-700 ms-3  tracking-wide">
                    Modern system
                  </label>
                  <input
                    className="ms-2"
                    type="radio"
                    value="Simple system"
                    name="audio"
                    onChange={(e) =>
                      dispatch({
                        type: "audioSystem",
                        value: e.target.value,
                      })
                    }
                    required
                  />{" "}
                  <label className=" text-gray-700  ms-3 tracking-wide">
                    Simple system
                  </label>
                  <input
                    className="ms-2"
                    type="radio"
                    value="don't want"
                    name="audio"
                    onChange={(e) =>
                      dispatch({
                        type: "audioSystem",
                        value: e.target.value,
                      })
                    }
                  />
                  <label className=" text-gray-700 ms-3 tracking-wide">
                    don't want
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Gender
          </label>
          <div className="flex justify-start">
            <input
              type="radio"
              value="Male"
              name="gender"
              onChange={(e) =>
                dispatch({
                  type: "gender",
                  value: e.target.value,
                })
              }
              required
            />
            <label className=" text-gray-700 ms-3  tracking-wide">Male</label>
            <input
              className="ms-3 tracking-wide"
              type="radio"
              value="Female"
              name="gender"
              onChange={(e) =>
                dispatch({
                  type: "gender",
                  value: e.target.value,
                })
              }
            />{" "}
            <label className=" text-gray-700  ms-3 tracking-wide">Female</label>
            <input
              className="ms-3 tracking-wide"
              type="radio"
              value="Others"
              name="gender"
              onChange={(e) =>
                dispatch({
                  type: "gender",
                  value: e.target.value,
                })
              }
              required
            />
            <label className=" text-gray-700 ms-3 tracking-wide">Others</label>
          </div>
        </div>

        <div className="mt-4 w-full  md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Date
          </label>
          <div>
            <input
              type="date"
              name="data"
              onChange={(e) =>
                dispatch({
                  type: "date",
                  value: e.target.value,
                })
              }
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
          </div>
        </div>
        <div className="mt-4 w-full  md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            From Time
          </label>
          <div>
            <input
              type="time"
              name="data"
              onChange={(e) =>
                dispatch({
                  type: "FromTime",
                  value: e.target.value,
                })
              }
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            To Time
          </label>
          <input
            type="time"
            name="data"
            onChange={(e) =>
              dispatch({
                type: "ToTime",
                value: e.target.value,
              })
            }
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            required
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Guest Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Jane"
            onChange={(e) =>
              dispatch({
                type: "GuestName",
                value: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="w-full mt-4 md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-zip"
          >
            Guest type
          </label>

          <Fragment>
            <Checkbox
              id="ripple-on"
              label="Alumini"
              value="Alumini"
              ripple={true}
              onChange={(e) =>
                dispatch({
                  type: "GuestType",
                  value: e.target.value,
                })
              }
            />
            <Checkbox
              id="ripple-off"
              value="not"
              label="not"
              ripple={false}
              onChange={(e) =>
                dispatch({
                  type: "GuestType",
                  value: e.target.value,
                })
              }
            />
          </Fragment>
        </div>

        <div className="flex mb-3 justify-center">
          <button
            className="bg-blue-500 hover:bg-[#dc0d63] text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
