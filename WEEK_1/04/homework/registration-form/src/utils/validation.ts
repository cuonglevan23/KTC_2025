import type { FormData, FormErrors, Country, Hobby } from '../types';

export const countries: Country[] = [
  { code: 'VN', name: 'Vietnam' },
  { code: 'US', name: 'United States' },
  { code: 'JP', name: 'Japan' },
  { code: 'KR', name: 'South Korea' },
  { code: 'CN', name: 'China' },
  { code: 'TH', name: 'Thailand' },
  { code: 'SG', name: 'Singapore' },
  { code: 'MY', name: 'Malaysia' },
];

export const hobbies: Hobby[] = [
  { id: 'reading', label: 'Reading' },
  { id: 'traveling', label: 'Traveling' },
  { id: 'gaming', label: 'Gaming' },
];

export const validateForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};

  // Full Name validation
  if (!formData.fullName || formData.fullName.trim().length < 3) {
    errors.fullName = 'Full Name must be at least 3 characters.';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  // Password validation
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!formData.password || !passwordRegex.test(formData.password)) {
    errors.password = 'Password must be at least 8 characters and contain letters and numbers.';
  }

  // Confirm Password validation
  if (!formData.confirmPassword || formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match.';
  }

  // Phone Number validation
  const phoneRegex = /^\d{10,}$/;
  if (!formData.phoneNumber || !phoneRegex.test(formData.phoneNumber.replace(/\s/g, ''))) {
    errors.phoneNumber = 'Phone number must be at least 10 digits.';
  }

  // Gender validation
  if (!formData.gender) {
    errors.gender = 'Please select a gender.';
  }

  // Date of Birth validation
  if (!formData.dateOfBirth) {
    errors.dateOfBirth = 'Please select your date of birth.';
  } else {
    const birthDate = new Date(formData.dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      // age--;
    }
    
    if (age < 18) {
      errors.dateOfBirth = 'You must be at least 18 years old.';
    }
  }

  // Country validation
  if (!formData.country) {
    errors.country = 'Please select a country.';
  }

  // Hobbies validation
  if (!formData.hobbies || formData.hobbies.length === 0) {
    errors.hobbies = 'Please select at least one hobby.';
  }

  // Profile Picture validation
  if (!formData.profilePicture) {
    errors.profilePicture = 'Please upload a profile picture.';
  } else {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!allowedTypes.includes(formData.profilePicture.type)) {
      errors.profilePicture = 'Profile picture must be a .jpg, .jpeg, or .png file.';
    }
  }

  // Bio validation (optional, but max 300 characters)
  if (formData.bio && formData.bio.length > 300) {
    errors.bio = 'Bio must not exceed 300 characters.';
  }

  return errors;
};
