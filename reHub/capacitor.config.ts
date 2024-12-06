import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Minden',
  webDir: 'dist',
  server: {
    androidScheme: 'https' // Garante que os assets sejam servidos corretamente no Android
  }
};

export default config;
