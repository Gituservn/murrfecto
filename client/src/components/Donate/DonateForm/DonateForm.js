import "./DonateForm.scss";
import FormSelect from "../FormSelect/FormSelect";
import axios from "axios";
import { useState } from "react";
import { _ENDPOINT } from "../../../variables/variables";
import { useSelector } from "react-redux";
import Spinner from "../../../helpers/spinner/Spinner";

const DonateForm = ({
  title,
  optionIdPrefix = "",
  hasDonateTypeButtons = false,
  menuPortalTarget = null,
}) => {
  const donationType = useSelector((state) => state.modal.donationType);
  const [donationAmount, setDonationAmount] = useState("");
  const [selectedOption, setSelectedOption] = useState(donationType);
  const [selectedCat, setSelectedCat] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderBody = {
      amount: donationAmount * 100,
      catLabel: selectedCat ? selectedCat.label : "",
    };
    try {
      setLoading(true);
      const response = await axios.post(`${_ENDPOINT}/payment`, orderBody);
      window.location.replace(response.data.checkoutUrl);
      setLoading(false);
    } catch (error) {
      console.error("An error occurred while processing the payment", error);
      setLoading(false);
    }
  };
  const handlePresetDonationSelect = (amount) => {
    setDonationAmount(amount);
  };
  const handleDonationAmountChange = (e) => {
    const selectedAmount = e.target.value;
    setDonationAmount(selectedAmount);
  };

  const handleCustomAmountClick = () => {
    setDonationAmount("");
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const donationOptions = ["20", "50", "100", "200"];

  return (
    <div className="donate-slider_wrap">
      <h3 className="donate-slider_title">{title}</h3>
      <form className="donate-form" onSubmit={handleSubmit}>
        {hasDonateTypeButtons && (
          <div className="button-group">
            <button
              className={`custom-button left ${
                selectedOption === "onetime" ? "selected" : ""
              }`}
              onClick={() => handleOptionSelect("onetime")}
              type="button"
            >
              Разово
            </button>
            <button
              className={`custom-button right ${
                selectedOption === "monthly" ? "selected" : ""
              }`}
              onClick={() => handleOptionSelect("monthly")}
              type="button"
            >
              Щомісячно
            </button>
          </div>
        )}
        <div className="donate-form_box">
          {donationOptions.map((option) => (
            <div className="donate-form_box-count" key={option}>
              <input
                type="radio"
                name="donation_number"
                id={`${optionIdPrefix}${option}`}
                value={option}
                onChange={handleDonationAmountChange}
                hidden
              />
              <label
                htmlFor={`${optionIdPrefix}${option}`}
                className={`donate-form_radio-label ${
                  donationAmount === option && "donate-form_checked"
                }`}
                onClick={() => handlePresetDonationSelect(option)}
              >
                <span className="donate-form_number">{option}</span>
              </label>
            </div>
          ))}
          <div className="donate-form_input-count">
            <input
              className="donate-form_input-free"
              type="number"
              name="donation_free"
              value={donationAmount}
              onChange={handleDonationAmountChange}
              onClick={handleCustomAmountClick}
              placeholder="Інша сума, UAH"
              min="0"
              step="1"
            />
          </div>
        </div>
        <FormSelect
          selectedCat={selectedCat}
          setSelectedCat={setSelectedCat}
          menuPortalTarget={menuPortalTarget}
        />
        <div>
          <button
            className="donate-form_btn"
            type="submit"
            value="Допомогти"
            disabled={!selectedCat || !donationAmount}
          >
            {loading ? <Spinner /> : "Допомогти"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonateForm;
