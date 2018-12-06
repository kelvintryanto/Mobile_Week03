export class SettingsService {
    private alternative = false;

    setBackground(isAlt: boolean) {
        this.alternative = isAlt;
    }

    isAltBackground(){
        return this.alternative;
    }
}