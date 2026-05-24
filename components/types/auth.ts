// ─────────────────────────────────────────────────────────────────────────────
// types/auth.ts
// All TypeScript types your backend developer will need.
// These define the shape of every request payload and response for auth.
// ─────────────────────────────────────────────────────────────────────────────

// ── User ─────────────────────────────────────────────────────────────────────

export type UserRole = 'customer' | 'admin'

export interface User {
  id:          string
  email:       string
  firstName:   string
  lastName:    string
  phone?:      string
  role:        UserRole
  avatar?:     string
  createdAt:   string   // ISO date string
  updatedAt:   string
  isVerified:  boolean
}

// ── Auth State ────────────────────────────────────────────────────────────────

export interface AuthState {
  user:          User | null
  accessToken:   string | null
  refreshToken:  string | null
  isLoading:     boolean
  isAuthenticated: boolean
}

// ── Request Payloads ──────────────────────────────────────────────────────────

export interface LoginPayload {
  email:    string
  password: string
}

export interface SignupPayload {
  firstName: string
  lastName:  string
  email:     string
  phone?:    string
  password:  string
}

export interface ForgotPasswordPayload {
  email: string
}

export interface ResetPasswordPayload {
  email:       string
  otp:         string
  newPassword: string
}

export interface VerifyOTPPayload {
  email: string
  otp:   string
  type:  'email-verification' | 'password-reset'
}

export interface ResendOTPPayload {
  email: string
  type:  'email-verification' | 'password-reset'
}

export interface UpdateProfilePayload {
  firstName?: string
  lastName?:  string
  phone?:     string
  address?:   Address
}

export interface ChangePasswordPayload {
  currentPassword: string
  newPassword:     string
}

// ── Response Shapes ───────────────────────────────────────────────────────────

export interface AuthResponse {
  user:          User
  accessToken:   string
  refreshToken:  string
}

export interface ApiResponse<T = void> {
  success: boolean
  message: string
  data?:   T
}

export interface ApiError {
  success: false
  message: string
  errors?: Record<string, string[]>  // field-level validation errors
  code?:   string                    // e.g. 'INVALID_OTP', 'EMAIL_TAKEN'
}

// ── Address ───────────────────────────────────────────────────────────────────

export interface Address {
  street?:  string
  city?:    string
  state?:   string
  country?: string
  zipCode?: string
}

// ── Token ─────────────────────────────────────────────────────────────────────

export interface TokenPayload {
  userId:  string
  email:   string
  role:    UserRole
  iat:     number
  exp:     number
}

// ── Auth Context ──────────────────────────────────────────────────────────────

export interface AuthContextValue {
  user:           User | null
  isLoading:      boolean
  isAuthenticated: boolean
  login:          (payload: LoginPayload)           => Promise<void>
  signup:         (payload: SignupPayload)           => Promise<void>
  logout:         ()                                 => Promise<void>
  forgotPassword: (payload: ForgotPasswordPayload)  => Promise<void>
  verifyOTP:      (payload: VerifyOTPPayload)        => Promise<void>
  resendOTP:      (payload: ResendOTPPayload)        => Promise<void>
  updateProfile:  (payload: UpdateProfilePayload)   => Promise<void>
}