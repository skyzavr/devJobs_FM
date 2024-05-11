const preferredSchemas = () => {
  const colorSchemes = {
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  };
  if (!window.matchMedia) return;

  for (const [key, value] of Object.entries(colorSchemes)) {
    if (window.matchMedia(value).matches) return key;
  }
  return;
};

export const initialState =
  localStorage.getItem('theme') || preferredSchemas() || 'light';
