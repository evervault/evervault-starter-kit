export const inputsConfig = {
  theme: 'minimal',
  labelFontSize: '15px',
  inputBorderColor: '#dfe1f4',
  labelColor: '#383a4d',
  inputBoxShadow: '0px 1px 2px rgba(0, 0, 0, 0.075)',
  inputHeight: '44px',
  inputBorderRadius: '9px',
  inputPlaceholderColor: '#9fa2b9',
  fontUrl:
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
};

export const relayDashbordUrl = `https://app.evervault.com/${process.env.NEXT_PUBLIC_TEAM_ID}/${process.env.NEXT_PUBLIC_APP_ID}/inbound-relay/${process.env.NEXT_PUBLIC_RELAY_ID}`;

export const vercelLogsUrl = `https://vercel.com/evervault/${process.env.NEXT_PUBLIC_VERCEL_PROJECT_NAME}/logs`;
