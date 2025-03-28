# Welcome to the mobile-wars app

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

The application consumes the SWAPI API for rendering and searching Star Wars characters

## Get started

1. Clone the repository

   ```bash
   git clone [url]
   ```

2. Install dependencies

   ```bash
   npm install
   ```

   > [!NOTE]
   > Make sure you can run **expo cli** commands

3. Setup a public env variable in a `.env` file for the public API ('https://swapi.py4e.com/api/'):

```.env
EXPO_PUBLIC_API_URL=https://swapi.py4e.com/api/
```

> [!TIP]
> This env variables is essential for the app to work and fetch the data properly

4. Start the app

   ```bash
    npx expo start
   ```

5. Scan the QR code displayed on the command line

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo
