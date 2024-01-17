export const HeaderOption = (title: string, addOn?: any) => {
  return {
    title: title,
    headerStyle: {
      backgroundColor: '#1B1C20',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    ...addOn,
  };
};
