import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './view/app/app.config';
import { App } from './view/app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
