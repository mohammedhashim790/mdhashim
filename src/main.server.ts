import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './view/app/app';
import { config } from './view/app/app.config.server';

const bootstrap = () => bootstrapApplication(App, config);

export default bootstrap;
