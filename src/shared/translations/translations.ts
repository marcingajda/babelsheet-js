export default interface ITranslations {
  hasTranslations(filters: string[]): Promise<boolean>;
  clearTranslations(): Promise<void>;
  setTranslations(filters: string[], translations: { [key: string]: any }): Promise<void>;
  getTranslations(filters: string[], format?: string): Promise<{ [key: string]: any }>;
}
