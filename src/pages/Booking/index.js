import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import "./styles.scss";

const Booking = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "00:00",
      guests: 1,
      occasion: "Birthday",
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      await new Promise((r) => setTimeout(r, 1000));
      setIsLoading(false);
      setIsSubmitted(true);
    },
    validationSchema: Yup.object({
      time: Yup.string().required(),
      date: Yup.string().required(),
      guests: Yup.number().required(),
      occasion: Yup.string().required(),
    }),
  });

  return (
    <div className="formWrapper">
      {isSubmitted && (
        <div className="alert">
          Your table is reserved!{" "}
          <span
            className="close"
            onClick={() => setIsSubmitted((prevState) => !prevState)}
          >
            ×
          </span>
        </div>
      )}
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Choose date</label>
          <input
            type="date"
            id="date"
            onChange={formik.handleChange}
            value={formik.values.date}
            onBlur={formik.handleBlur}
          />
          {formik.errors.date && formik.touched.date && (
            <p className="error">{formik.errors.date}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="time">Choose time</label>
          <select
            id="time"
            name="time"
            onChange={formik.handleChange}
            value={formik.values.time}
            onBlur={formik.handleBlur}
          >
            <option>01:00</option>
            <option>02:00</option>
            <option>03:00</option>
            <option>04:00</option>
            <option>05:00</option>
            <option>06:00</option>
            <option>07:00</option>
            <option>08:00</option>
            <option>09:00</option>
            <option>10:00</option>
            <option>11:00</option>
            <option>12:00</option>
            <option>13:00</option>
            <option>14:00</option>
            <option>15:00</option>
            <option>16:00</option>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
            <option>23:00</option>
            <option>24:00</option>
          </select>
          {formik.errors.time && formik.touched.time && (
            <p className="error">{formik.errors.time}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guests"
            onChange={formik.handleChange}
            value={formik.values.guests}
            onBlur={formik.handleBlur}
          />
          {formik.errors.guests && formik.touched.guests && (
            <p className="error">{formik.errors.guests}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            onChange={formik.handleChange}
            value={formik.values.occasion}
            onBlur={formik.handleBlur}
          >
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
            <option>Wedding</option>
          </select>
          {formik.errors.occasion && formik.touched.occasion && (
            <p className="error">{formik.errors.occasion}</p>
          )}
        </div>

        <div className="form-group text-center mt-2">
          <button type="submit" className="btn">
            Make Reservation
            {isLoading && (
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
