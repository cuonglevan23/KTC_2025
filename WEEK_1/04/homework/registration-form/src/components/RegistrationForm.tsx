import React, { useState } from "react";
import type { FormData, FormErrors } from "../types";
import { validateForm, countries, hobbies } from "../utils/validation";
import styles from "./RegistrationForm.module.css";

const initialFormData: FormData = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  gender: "",
  dateOfBirth: "",
  country: "",
  hobbies: [],
  profilePicture: null,
  bio: "",
};

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    field: keyof FormData,
    value: string | string[] | File | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const handleHobbyChange = (hobbyId: string, checked: boolean) => {
    const updatedHobbies = checked
      ? [...formData.hobbies, hobbyId]
      : formData.hobbies.filter((h) => h !== hobbyId);

    handleInputChange("hobbies", updatedHobbies);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      console.log("Form submitted successfully:", formData);
      // Here you would typically send data to a server
    }
  };

  const bioCharCount = formData.bio.length;
  const bioMaxLength = 300;

  if (isSubmitted) {
    return (
      <div className={styles.form}>
        <div className={styles.successMessage}>
          <h2>Registration Successful! 🎉</h2>
          <p>Your account has been created successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>User Registration</h1>

      <div className={styles.formGrid}>
        {/* Full Name */}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Full Name<span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            className={`${styles.input} ${errors.fullName ? styles.error : ""}`}
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <div className={styles.error}>{errors.fullName}</div>
          )}
        </div>

        {/* Email */}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Email<span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            className={`${styles.input} ${errors.email ? styles.error : ""}`}
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="Enter your email address"
          />
          {errors.email && <div className={styles.error}>{errors.email}</div>}
        </div>

        {/* Password */}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Password<span className={styles.required}>*</span>
          </label>
          <input
            type="password"
            className={`${styles.input} ${errors.password ? styles.error : ""}`}
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            placeholder="Create a strong password"
          />
          {errors.password && (
            <div className={styles.error}>{errors.password}</div>
          )}
        </div>

        {/* Confirm Password */}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Confirm Password<span className={styles.required}>*</span>
          </label>
          <input
            type="password"
            className={`${styles.input} ${
              errors.confirmPassword ? styles.error : ""
            }`}
            value={formData.confirmPassword}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <div className={styles.error}>{errors.confirmPassword}</div>
          )}
        </div>

        {/* Phone Number */}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Phone Number<span className={styles.required}>*</span>
          </label>
          <input
            type="tel"
            className={`${styles.input} ${
              errors.phoneNumber ? styles.error : ""
            }`}
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            placeholder="Enter your phone number"
          />
          {errors.phoneNumber && (
            <div className={styles.error}>{errors.phoneNumber}</div>
          )}
        </div>

        {/* Date of Birth */}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Date of Birth<span className={styles.required}>*</span>
          </label>
          <input
            type="date"
            className={`${styles.dateInput} ${
              errors.dateOfBirth ? styles.error : ""
            }`}
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
          />
          {errors.dateOfBirth && (
            <div className={styles.error}>{errors.dateOfBirth}</div>
          )}
        </div>

        {/* Gender */}
        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <label className={styles.label}>
            Gender<span className={styles.required}>*</span>
          </label>
          <div className={styles.radioGroup}>
            {["male", "female", "other"].map((gender) => (
              <div key={gender} className={styles.radioItem}>
                <input
                  type="radio"
                  id={gender}
                  name="gender"
                  value={gender}
                  className={styles.radioInput}
                  checked={formData.gender === gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                />
                <label htmlFor={gender} className={styles.radioLabel}>
                  {gender.charAt(0).toUpperCase() + gender.slice(1)}
                </label>
              </div>
            ))}
          </div>
          {errors.gender && <div className={styles.error}>{errors.gender}</div>}
        </div>

        {/* Country */}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Country<span className={styles.required}>*</span>
          </label>
          <select
            className={`${styles.select} ${errors.country ? styles.error : ""}`}
            value={formData.country}
            onChange={(e) => handleInputChange("country", e.target.value)}
          >
            <option value="">Select your country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.country && (
            <div className={styles.error}>{errors.country}</div>
          )}
        </div>

        {/* Profile Picture */}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Profile Picture<span className={styles.required}>*</span>
          </label>
          <input
            type="file"
            accept=".jpg,.jpeg,.png"
            className={styles.fileInput}
            onChange={(e) =>
              handleInputChange("profilePicture", e.target.files?.[0] || null)
            }
          />
          {errors.profilePicture && (
            <div className={styles.error}>{errors.profilePicture}</div>
          )}
        </div>

        {/* Hobbies */}
        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <label className={styles.label}>
            Hobbies<span className={styles.required}>*</span>
          </label>
          <div className={styles.checkboxGroup}>
            {hobbies.map((hobby) => (
              <div key={hobby.id} className={styles.checkboxItem}>
                <input
                  type="checkbox"
                  id={hobby.id}
                  className={styles.checkboxInput}
                  checked={formData.hobbies.includes(hobby.id)}
                  onChange={(e) =>
                    handleHobbyChange(hobby.id, e.target.checked)
                  }
                />
                <label htmlFor={hobby.id} className={styles.checkboxLabel}>
                  {hobby.label}
                </label>
              </div>
            ))}
          </div>
          {errors.hobbies && (
            <div className={styles.error}>{errors.hobbies}</div>
          )}
        </div>

        {/* Bio */}
        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <label className={styles.label}>Bio (Optional)</label>
          <textarea
            className={`${styles.textarea} ${errors.bio ? styles.error : ""}`}
            value={formData.bio}
            onChange={(e) => handleInputChange("bio", e.target.value)}
            placeholder="Tell us about yourself..."
            maxLength={bioMaxLength}
          />
          <div
            className={`${styles.charCount} ${
              bioCharCount > 250 ? styles.warning : ""
            } ${bioCharCount >= bioMaxLength ? styles.error : ""}`}
          >
            {bioCharCount}/{bioMaxLength} characters
          </div>
          {errors.bio && <div className={styles.error}>{errors.bio}</div>}
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className={styles.submitButton}>
        Create Account
      </button>
    </form>
  );
};
