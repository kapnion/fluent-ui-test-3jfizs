import './polyfills';
import {
  provideFluentDesignSystem,
  fluentButton,
  fluentTextField,
  fluentAccordion,
  fluentAccordionItem,
  fluentDataGridCell,
  fluentDataGridRow,
  fluentDataGrid
} from '@fluentui/web-components';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

provideFluentDesignSystem().register(fluentButton(), fluentTextField());
provideFluentDesignSystem()
    .register(
        fluentAccordion(),
        fluentAccordionItem(),
        fluentDataGridCell(),
        fluentDataGridRow(),
        fluentDataGrid()
    );

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
