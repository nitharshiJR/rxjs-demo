import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { App } from './app/app';

// If you still have other providers in appConfig, spread them here
import { appConfig } from './app/app.config';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []), // keep existing providers
    provideHttpClient() // ✅ replaces HttpClientModule
  ]
})
.catch((err) => console.error(err));
