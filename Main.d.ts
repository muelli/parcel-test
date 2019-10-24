export namespace Elm {
    namespace LoginApp {
        export function init(options: {
            node?: HTMLElement | null;
            flags: {
                credentials: { username: string; password: string } | null;
                translations: { de: any; en: any } | null;
            } | null
        }): Elm.LoginApp.App;
    }
}
