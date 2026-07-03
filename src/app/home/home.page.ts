import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonSelect, 
  IonSelectOption, 
  IonList, 
  IonItem, 
  IonButton
} from '@ionic/angular/standalone';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonSelect, 
    IonSelectOption, 
    IonList, 
    IonItem, 
    IonButton,
    TranslatePipe // Se importa el pipe directamente en lugar del módulo obsoleto
  ]
})
export class HomePage {
  // Lista de idiomas disponibles para iterar con @for en la UI
  availableLanguages = [
    { code: 'es', labelKey: 'HOME.LANG_SPANISH' },
    { code: 'en', labelKey: 'HOME.LANG_ENGLISH' }
  ];

  // Lista de claves de características para iterar con @for en la UI
  featuresKeys = [
    'HOME.FEATURE_1',
    'HOME.FEATURE_2',
    'HOME.FEATURE_3',
    'HOME.FEATURE_4'
  ];

  constructor(public translate: TranslateService) {
    // En ngx-translate v18+, translate.currentLang es un Signal.
    // El valor por defecto se carga automáticamente desde la configuración.
  }

  // Método para actualizar el idioma dinámicamente en tiempo real
  changeLanguage(event: any) {
    const selectedLang = event.detail.value;
    this.translate.use(selectedLang);
  }
}
