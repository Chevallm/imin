import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      "projectId": "im-in-28c21",
      "appId": "1:392202500917:web:0595a73adcbc8a1ac22a7c",
      "storageBucket": "im-in-28c21.appspot.com",
      "apiKey": "AIzaSyAJsTg567CMRCAmsPg9kgCKFa3HhYjirBE",
      "authDomain": "im-in-28c21.firebaseapp.com",
      "messagingSenderId": "392202500917"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())]
};
