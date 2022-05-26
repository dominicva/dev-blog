import { primary, secondary } from '../colors/';

export const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const h1 = {
  // alignSelf: 'flex-start',
  marginTop: '1.25rem',
  marginBottom: '1rem',
};

export const avatar = {
  borderRadius: '50%',
};

export const linksSection = {
  ...container,
  // alignItems: 'flex-start',
};

export const social = {
  ...container,
  flexDirection: 'row',
  paddingLeft: 0,
};

export const socialIcon = {
  marginRight: '0.5rem',
};

export const codeIcon = {
  ...socialIcon,
  padding: '3px',
  borderRadius: '4px',
  color: primary,
  backgroundColor: secondary,
};

export const location = {
  ...container,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '0.75rem',
};

export const bio = {
  ...container,
  alignItems: 'flex-start',
  margin: '1.5rem 0',
};

export const bioP = { marginBottom: '0.5rem' };
