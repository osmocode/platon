import { NgeDocLink, NgeDocMeta, NgeDocSettings } from '@cisstech/nge/doc';
import { WebComponentTypes } from '../web-component';
import { WebComponentService } from '../web-component.service';

export function createWebComponentDoc(meta?: Partial<NgeDocMeta>): NgeDocSettings {
    return {
        meta: {
            name: 'Composants',
            root: '/doc/components/',
            logo: 'assets/images/logo/platon.svg',
            backUrl: '/doc',
            repo: {
                name: 'platon-front',
                url: 'https://github.com/PremierLangage/platon-front'
            },
            ... (meta || {})
        },
        pages: [
            { title: 'Présentation', href: 'presentation', renderer: 'assets/docs/components/docs/presentation.md' },
            { title: 'Utilisation', href: 'usage', renderer: 'assets/docs/components/docs/usage.md'  },
            { title: 'Css', href: 'css', renderer: () => import('./css/css.module').then(m => m.CssModule) },
            (injector: any) => {
                const api = injector.get(WebComponentService);
                return {
                    title: 'Forms',
                    href: 'forms',
                    renderer: () => import('./listing/listing.module').then(m => m.ListingModule),
                    inputs: { type: WebComponentTypes.form },
                    children: links(api, WebComponentTypes.form),
                };
            },
            (injector: any) => {
                const api = injector.get(WebComponentService);
                return {
                    title: 'Widgets',
                    href: 'widgets',
                    renderer: () => import('./listing/listing.module').then(m => m.ListingModule),
                    inputs: { type: WebComponentTypes.widget },
                    children: links(api, WebComponentTypes.widget)
                };
            }
        ],
    };
}

function links(api: WebComponentService, type: WebComponentTypes): NgeDocLink[] {
    return api.ofType(type).map(e => {
        const name = e.selector.replace('wc-', '');
        return {
            href: e.selector,
            title: e.name,
            icon: e.icon,
            renderer: () => import('./docs.module').then(m => m.DocsModule),
            actions: [
                {
                    title: 'Éditer sur Github',
                    icon: 'https://icongr.am/octicons/mark-github.svg',
                    run: `https://github.com/PremierLangage/platon-front/blob/master/libs/feature/web-component/src/lib/${type}s/${name}`
                }
            ],
            inputs: {
                definition: e
            }
        }
    });
}
