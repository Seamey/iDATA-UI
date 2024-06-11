import { IconType } from 'react-icons';
import { ReactNode } from 'react';

export type DashboardCardProps = {
  title: string;
  image: string;
  desc: string;
}

export type OverviewCardProps = {
  count: number;
  label: string;
  icon: IconType;
  bgColor: string;
}

export type GenerateApiCardProps = {
  image: string;
  icon: IconType;
  title: string;
  desc: string;
  url: string;
}

export type ModalNotificationProps = {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

export type ModalNewProjectProps = {
  onClose: () => void;
  children: ReactNode;
}

export type HistoryCardProps = {
  title: string;
  count: number;
  bgColor: string;
}

// user login request
export interface LoginValues {
    email: string;
    password: string;
    rememberMe: boolean;
}

// user signup request
export interface SignupValues {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

// user forget password request
export interface ForgetPasswordValues {
    email: string;
    oldPassword: string;
    newPassword: string;
}


// Profile type
export type ProfilesType ={
  name: string,
  position: string,
  quote: string,
  fb_social: string,
  git_hub: string,
  git_lab: string
}

export interface Section {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  sidebarLabel: string;
}
// Change password
export type ChangePasswordType = {
  oldPassword: string,
  newPassword: string
  confirmNewPassword: string
}
// Edit Profile Type
export type EditprofileType ={
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  position: string,
  image: string,
}
